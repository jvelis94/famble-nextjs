import styles from "../styles/Login.module.css"
import GoogleAuth from "../components/GoogleAuth"

const Register = () => {
    return (
        <div>
            <GoogleAuth />
            <form>
                <div className={styles.formGroup}>
                    <div className={styles.formLine}>
                        <label>Username</label>
                    </div>
                    <div className={styles.formLine}>
                        <input type="text" name="username" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formLine}>
                        <label>Email</label>
                    </div>
                    <div className={styles.formLine}>
                        <input type="email" name="email" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formLine}>
                        <label>Password</label>
                    </div>
                    <div className={styles.formLine}>
                        <input type="password" name="password" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <input type="submit" value="Create Account" />
                </div>
            </form>
            <h4 style={{textAlign: 'center', fontWeight: 400}}>Already a member? <a style={{color: 'blue'}}>Login</a></h4>
        </div>
    )

}

export default Register