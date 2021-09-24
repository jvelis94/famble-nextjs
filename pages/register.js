import styles from "../styles/Login.module.css"
import GoogleAuth from "../components/GoogleAuth"
import { emailReducer, passwordReducer, usernameReducer } from "../helpers/auth-util"
import { useReducer, useState, useEffect } from "react"

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleFormValidation()) {
            console.log('form is valid')
        }
    };

    const handleFormValidation = () => {
        return email.includes("@") && password.trim().length >= 6 && username.trim().length > 1        
    }

    return (
        <div>
            <GoogleAuth />
            <form onSubmit={handleSubmit} >
                <div className={styles.formGroup}>
                    <div className={styles.formLine}>
                        <label>Username</label>
                    </div>
                    <div className={styles.formLine}>
                        <input type="text" minLength={1} name="username" onChange={handleUsernameChange}/>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formLine}>
                        <label>Email</label>
                    </div>
                    <div className={styles.formLine}>
                        <input type="email" name="email" onChange={handleEmailChange} />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formLine}>
                        <label>Password</label>
                    </div>
                    <div className={styles.formLine}>
                        <input type="password" minLength={6} name="password" onChange={handlePasswordChange} />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <input type="submit" value="Create Account" />
                </div>
            </form>
            <h4 style={{textAlign: 'center', fontWeight: 400}}>
                Already a member? <a style={{color: 'blue'}} href='/login'>Login</a>
            </h4>
        </div>
    )

}



export default Register