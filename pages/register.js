import styles from "../styles/Login.module.css"
import GoogleAuth from "../components/GoogleAuth"
import { emailReducer, passwordReducer, usernameReducer, register } from "../helpers/auth-util"
import { useReducer, useState, useEffect } from "react"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie';


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies([]);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

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
            const register_response = await register(data)
            if (register_response.status === 204) {
                setCookie("sign_up_result", "successful", { 
                    path: "/",
                    maxAge: 3600, // Expires after 1hr
                    sameSite: true 
                })
                router.push('/login')
            }
        }
    };

    const handleFormValidation = () => {
        return email.includes("@") && password.trim().length >= 6 && username.trim().length > 1        
    }

    return (
        <div>
            {successAlert}
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