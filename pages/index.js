import Head from 'next/head';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

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

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.001;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[150, 150, 150]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"gray"} />
    </mesh>
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
        <Canvas orthographic="true" className="h-96">
          <pointLight position={[10, 10, 10]} intensity={10} />
          <Box position={[0, 0, -500]} />
        </Canvas>
        <h1>Parker David Rueve</h1>
        <main>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <BlockLink href="/beton">Beton Theme</BlockLink>
            <BlockLink href="/7guis">7 GUIs</BlockLink>
            <BlockLink href="/structures">structures</BlockLink>
            <BlockLink href="/code">code</BlockLink>
            <BlockLink href="/poasts">poasts</BlockLink>
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