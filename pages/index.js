import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function BlockLink(props) {
  return (
    <div className="flex-grow">
      <Link href={props.href}>
        <div className="rounded-sm shadow-xl w-36 h-36 border border-black bg-white cursor-pointer">
          {props.children}
        </div>
      </Link>
    </div>
  );
}

function MonoText(props) {
  return (
  <span class="inline-block mx-4">  
    {
    props.word
      .split("")
      .map(ch => ( <span className="inline-block text-center w-14">{ ch }</span> ))
    }
  </span>

    )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Parker David Rueve</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center min-h-screen bg-beige">
        <h1
          className="uppercase text-4xl tracking-widest mb-20 mx-2"
        > 
          <MonoText word="Parker"/>
          <MonoText word="David"/>
          <MonoText word="Rueve"/>  
        </h1>
        <main>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mb-20">
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