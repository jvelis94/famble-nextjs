import '../styles/globals.css'
import { AuthContextProvider } from '../store/auth-context';

function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <h1 className='logoFont'>famble</h1>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
