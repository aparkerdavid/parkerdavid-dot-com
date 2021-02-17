import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Parker David Rueve</h1>
      </main>

      <p>Parker is an artist and programmer interested in the built environment.</p>

      <Link href="/poasts">poasts</Link>
      <Link href="/code">code</Link>
      <Link href="/structures">structures</Link>


      <footer>

      </footer>
    </div>
  );
}
