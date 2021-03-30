import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function BlockLink(props) {
  return (
    <div className="flex-grow">
      <Link href={props.href}>
        <div className="flex justify-items-center items-center content-center rounded-sm shadow-xl w-36 h-36 border border-black bg-white cursor-pointer">
        <div className="mx-auto">
          {props.children}          
        </div>
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

      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1
          className="uppercase text-4xl tracking-widest mb-20 mx-2"
        > 
          <MonoText word="Parker"/>
          <MonoText word="David"/>
          <MonoText word="Rueve"/>  
        </h1>
        <main>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mb-20">
            <BlockLink href="https://stoic-franklin-71dc69.netlify.app">
              <img src="/7guis.svg" alt="7 GUIs"/>
            </BlockLink>
            <BlockLink href="http://github.com/aparkerdavid">
              <img src="/gh.svg" alt="GitHub Icon"/>
            </BlockLink>
            <BlockLink href="/cv">
              <img src="/cv.svg" alt="CV"/>
            </BlockLink>

          </div>
        </main>

        <footer>
          <div className="m-auto">© Parker David Rueve, {(new Date()).getFullYear()}</div>
        </footer>
      </div>
    </>
  );
}