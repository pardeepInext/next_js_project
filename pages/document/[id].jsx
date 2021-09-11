import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Master from '../../components/layouts/Master';
const document = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Head>
                <title>Document {id}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Master>
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <h1 className="app-page-title mb-0">My Docs {id}</h1>
                    </div>
                </div>
            </Master>
        </>
    )
}

export default document
