import styles from "../styles/Login.module.css"
import GoogleAuth from "../components/GoogleAuth"
import { login } from "../helpers/auth-util"
import { useReducer, useState, useEffect } from "react"
import { useCookies } from 'react-cookie';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies([]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleFormValidation()) {
            const data = { user: { email: email, password: password } }
            const login_response = await login(data)
            if (login_response.status === 200) {
                setCookie("token", login_response.headers.authorization, { 
                    path: "/",
                    maxAge: 3600, // Expires after 1hr
                    sameSite: true 
                })
            }   
        }
    };

    const handleFormValidation = () => {
        return email.includes("@") && password.trim().length >= 6
    }

    const successAlert =  (
        <Alert severity="success">
            <AlertTitle>Successfully Signed up!</AlertTitle>
            Please login below
        </Alert>
    )

    return (
        <div>
            {cookies.sign_up_result && successAlert}
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