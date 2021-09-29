import { useEffect, useRef, useState } from 'react'
import styles from './BettorDropdown.module.css'

const BettorDropdown = (props) => {
    const [showSearchResults, setShowSearchResults] = useState(true)
    const modalRef = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu, then close the menu
          if (showSearchResults && modalRef.current && !modalRef.current.contains(e.target)) {
            setShowSearchResults(false)
          }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showSearchResults])

    const handleSelectUser = (user) => {
        props.handleSelectedBetReceiver(user)
        setShowSearchResults(false)
    }

    const modal = (
        <ul>
            {props.search_results.map((result) => (
                <li key={result.id} onClick={() => handleSelectUser(result)}>
                    {result.username}
                </li>
            ))}
        </ul>
        
    )

    return (
        <div className={styles.listContainer} ref={modalRef}>
            {showSearchResults && modal}
        </div>
    )
}

export default BettorDropdown