import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Famble</title>
        <meta name="description" content="post wagers against your friends and share them with others" />
        <meta name="keywords" content="wager, bet, friends, social betting"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
