import styles from "../styles/Login.module.css"
import GoogleAuth from "../components/GoogleAuth"

const Login = () => {
    return (
        <div>
            <GoogleAuth />
            <form>
                <div className={styles.formGroup}>
                    <div className={styles.formLine}>
                        <label>Email</label>
                    </div>
                    <div className={styles.formLine}>
                        <input type="email" name="email" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={`${styles.formLine} ${styles.passwordContainer}`}>
                        <label>Password</label>
                        <a className={styles.forgotPassword} href="/forgot-password">forgot password</a>
                    </div>
                    <div className={styles.formLine}>
                        <input type="password" name="password" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <input type="submit" value="Login" />
                </div>
            </form>
            <h4 style={{textAlign: 'center', fontWeight: 400}}>Not a member? <a style={{color: 'blue'}}>Register</a></h4>
        </div>
    )

}

export default Login