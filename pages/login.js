import styles from "../styles/Login.module.css"
import GoogleAuth from "../components/GoogleAuth"
import { emailReducer, passwordReducer, usernameReducer } from "../helpers/auth-util"
import { useReducer, useState, useEffect } from "react"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleFormValidation) {
            console.log('form is valid')
        } 
    };

    const handleFormValidation = () => {
        return email.includes("@") && password.trim().length >= 6
    }

    return (
        <div>
            <GoogleAuth />
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <div className={styles.formLine}>
                        <label>Email</label>
                    </div>
                    <div className={styles.formLine}>
                        <input type="email" name="email" onChange={handleEmailChange} />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={`${styles.formLine} ${styles.passwordContainer}`}>
                        <label>Password</label>
                        <a className={styles.forgotPassword} href="/forgot-password">forgot password</a>
                    </div>
                    <div className={styles.formLine}>
                        <input type="password" minLength={6} name="password" onChange={handlePasswordChange} />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <input type="submit" value="Login" />
                </div>
            </form>
            <h4 style={{textAlign: 'center', fontWeight: 400}}>
                Not a member? <a style={{color: 'blue'}} href="/register">Register</a>
            </h4>
        </div>
    )

}

export default Login