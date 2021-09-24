import Image from 'next/image'
// import googleIcon from '../public/google_dark_normal.svg'
// import googleIcon from '../public/google_signin_dark.png'
import googleIcon from '../public/google.svg'
import styles from '../styles/Login.module.css'

const GoogleAuth = () => {
    return (
        <div className={styles.googleAuthContainer}>
            <Image src={googleIcon} alt="google-icon" />
            <div className={styles.authSeparator}>
                <span>or</span>
            </div>
        </div>
            
        
    )
}

export default GoogleAuth