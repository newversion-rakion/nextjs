import Layout from 'components/layout';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="loginPage">
          <div className="container">
            Login page
          </div>
        </div>
      </Layout>
    </div>
  )
}
