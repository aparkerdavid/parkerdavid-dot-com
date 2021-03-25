import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function BlockLink(props) {
  return (
    <div className="flex-grow">
      <Link href={props.href}>
        <div className="rounded-sm w-36 h-36 border-gray-900 border cursor-pointer">
          {props.children}
        </div>
      </Link>
    </div>
  );
}


export default function Home() {
  return (
    <>
      <Head>
        <title>Parker David Rueve</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center min-h-screen bg-beton-100">
        <h1>Parker David Rueve</h1>
        <main>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {/*<BlockLink href="/beton">Beton Theme</BlockLink>*/}
            <BlockLink href="https://stoic-franklin-71dc69.netlify.app">7 GUIs</BlockLink>
            {/*<BlockLink href="/structures">structures</BlockLink>*/}
            <BlockLink href="/code">code</BlockLink>
            {/*<BlockLink href="/poasts">poasts</BlockLink>*/}
            <BlockLink href="/cv">CV</BlockLink>

          </div>
        </main>

        <footer>
          <div className="m-auto">© Parker David Rueve, {(new Date()).getFullYear()}</div>
        </footer>
      </div>
    </>
  );
}