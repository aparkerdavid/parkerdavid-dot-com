import Head from 'next/head';
import React from 'react';

export default function Layout(props) {
	    return (
        <>
            <Head>
                <title>Parker David Rueve</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className="min-h-screen py-20 mx-auto max-w-xl flow">
	            	{ props.children }
            </div>
        </>
    );
}
