import React from 'react'
import { Row } from 'react-bootstrap'
import Header from './header'
import Menubar from './menubar'
import Footer from './footer'
import Head from "next/head";

export default function MainComponent(props) {
    return (
        <>
            <Head>
                <title>{props.title ? props.title : "FazzPay"}</title>
            </Head>
            <Header />
            <section style={{ padding: '20px 150px', backgroundColor: '#1A374D' }} className='mainSection'>
                <Row className='min-vh-100 mw-100'>
                    <Menubar />
                    <main>{props.children}</main>
                </Row>
            </section>
            <Footer />
        </>
    )
}