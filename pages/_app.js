import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1 className='logoFont'>famble</h1>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
