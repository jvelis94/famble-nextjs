import { useEffect, useRef, useState } from 'react'
import styles from './CreateBetForm.module.css'
import { createBet, getBettors } from '../../helpers/bet-util'
import BettorDropdown from './BettorDropdown';
import { useRouter } from 'next/router';

const CreateBetForm = () => {
    const router = useRouter()
    const betNameRef = useRef("")
    const startDateRef = useRef("")
    const endDateRef = useRef("")
    const wagerAmountRef = useRef("")
    const categoryRef = useRef("")
    const betReceiverRef = useRef("")
    const rulesRef = useRef("")
    const [showSearchResults, setShowSearchResults] = useState(false)
    const [betReceiverResults, setBetReceiverResults] = useState({})
    const [selectedBetReceiver, setSelectedBetReceiver] = useState({id: 0, username: 'dummy'})

    const betData = {
        name: betNameRef.current.value,
        start_date: startDateRef.current.value,
        end_date: endDateRef.current.value,
        wager_amount: wagerAmountRef.current.value,
        category: categoryRef.current.value,
        bet_maker_id: 2,
        bet_receiver_id: selectedBetReceiver.id
    }

    const handleSelectedBetReceiver = (user) => {
        setSelectedBetReceiver(user)
        betReceiverRef.current.value = user.username
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const create_bet_response = await createBet(betData)
        console.log(create_bet_response)
        if (create_bet_response.status === 200) {
            router.push('/bets')
        }
    }

    const handleBettorSearch = async (event) => {
        if (betReceiverRef.current.value.length > 2)  {
            const get_bettors = await getBettors(betReceiverRef.current.value)
            setBetReceiverResults(get_bettors.data)
            setShowSearchResults(true)
        } else { 
            setShowSearchResults(false)
        }
    }

    return (
        <div>
            <h2 className={styles.formTitle}>New Wager</h2>
            <form onSubmit={handleFormSubmit}>
                <div className={styles.formGroup}>
                    <div className={styles.formLine}>
                        <label>Bet Name</label>
                    </div>
                    <div className={styles.formLine}>
                        <input type="text" minLength={1} name="bet title" ref={betNameRef}/>
                    </div>
                </div>
                <div className={styles.inlineFormLine} >
                    <div className={styles.formGroup}>
                        <div className={styles.formLine}>
                            <label>Start Date</label>
                        </div>
                        <div className={styles.formLine}>
                            <input type="date" ref={startDateRef}/>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.formLine}>
                            <label>End Date</label>
                        </div>
                        <div className={styles.formLine}>
                            <input type="date" ref={endDateRef} />
                        </div>
                    </div>
                </div>
                <div className={styles.inlineFormLine} >
                    <div className={styles.formGroup}>
                        <div className={styles.formLine}>
                            <label>Wager Amount</label>
                        </div>
                        <div className={styles.formLine}>
                            <input type="number" ref={wagerAmountRef}/>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.formLine}>
                            <label>Category</label>
                        </div>
                        <div className={styles.formLine}>
                            <input type="text" ref={categoryRef} />
                        </div>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formLine}>
                        <label>Who are you challenging?</label>
                    </div>
                    <div className={styles.formLine}>
                        <input type="text" ref={betReceiverRef} onChange={handleBettorSearch}/>
                        {showSearchResults && <BettorDropdown 
                            search_results={betReceiverResults} 
                            handleSelectedBetReceiver={handleSelectedBetReceiver}    
                            />
                        }
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formLine}>
                        <label>Bet Rules</label>
                    </div>
                    <div className={styles.formLine}>
                        <textarea rows="8" ref={rulesRef} />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <input type="submit" value="Create Bet" />
                </div>
            </form>
        </div>
    )
}

export default CreateBetForm