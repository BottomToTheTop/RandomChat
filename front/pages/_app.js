import React from 'react';
import Head from 'next/head';

const RandomChat = ({ Component }) => {
    return (
        <>
            <Head>
                <title>Hi randomchat</title>
            </Head>
            <Component />
        </>
    );
};

export default RandomChat;
