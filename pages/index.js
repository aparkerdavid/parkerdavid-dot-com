import Head from 'next/head';
import Link from 'next/link';

function BlockLink(props) {
  return (
  <div className="flex-grow">
      <Link href={props.href}>
        <div className="w-36 h-36 border-gray-900 border cursor-pointer">
          {props.children}
        </div>
      </Link>
  </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-beton-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Parker David Rueve</h1>
      </main>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <BlockLink href="/beton">Beton</BlockLink>
        <BlockLink href="/7guis">7 GUIs</BlockLink>
        <BlockLink href="/structures">structures</BlockLink>
        <BlockLink href="/code">code</BlockLink>
        <BlockLink href="/poasts">poasts</BlockLink>
        <BlockLink href="/cv">CV</BlockLink>

      </div>

      <footer>

      </footer>
    </div>
  );
}
