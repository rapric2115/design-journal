import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';


function Calculator() {
    return(
        <Layout>
            <Head>
                <title>Calculadora de Trabajo | Designiumpartner</title>
            </Head>
        <main className="Container">
            {/* role, location, education, year experience, technologies */}
            <h1>Calculator</h1>
        </main>
        </Layout>
    )
}

export default Calculator;