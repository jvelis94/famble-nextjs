import '../styles/globals.css'
// import { AuthContextProvider } from '../store/auth-context';
import { WebSocketContextProvider } from '../store/web-socket-context';


function MyApp({ Component, pageProps }) {

  return (
    <WebSocketContextProvider>
      <h1 className='logoFont'>famble</h1>
      <Component {...pageProps} />
    </WebSocketContextProvider>
  )
}

export default MyApp
