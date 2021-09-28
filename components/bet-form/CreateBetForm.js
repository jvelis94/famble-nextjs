import { useRef } from 'react'
import styles from './CreateBetForm.module.css'

const CreateBetForm = () => {
    const betTitleRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()
    const wagerAmountRef = useRef()
    const categoryRef = useRef()
    const participantRef = useRef()
    const rulesRef = useRef()

    const handleFormSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <h2 className={styles.formTitle}>New Wager</h2>
            <form onSubmit={handleFormSubmit}>
                <div className={styles.formGroup}>
                    <div className={styles.formLine}>
                        <label>Bet Title</label>
                    </div>
                    <div className={styles.formLine}>
                        <input type="text" minLength={1} name="bet title" ref={betTitleRef}/>
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
                        <label>Participant</label>
                    </div>
                    <div className={styles.formLine}>
                        <input type="text" ref={participantRef}/>
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