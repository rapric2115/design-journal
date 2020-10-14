import Layout from '../components/Layout';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Test from './testing';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>The Design Journal | Designiumpartner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
      <Test />
       
      </main>

    </Layout>
  )
}
