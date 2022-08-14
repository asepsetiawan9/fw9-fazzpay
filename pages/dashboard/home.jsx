import React from 'react'
import Menubar from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import Image from 'next/image'
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap'

import statistic from '../../public/images/statistic.png'
//icon
import { FiArrowDown, FiArrowUp, FiPlus } from "react-icons/fi";
//photo
import p1 from '../../public/images/p1.png';


function Home() {
    return (
        <>
            <section className='headerDashboard'>
                <Header />
            </section>

            <section style={{ padding: '20px 150px', backgroundColor: '#1A374D' }} className='mainSection'>
                <Row className='min-vh-100 mw-100'>
                    <Menubar />
                    <Col md={9} className='px-3 d-flex flex-column gap-4'>
                        <div style={{ backgroundColor: '#406882', borderRadius: '20px' }} className='mainDashTfWrap'>
                            <div className="mainDashTf">
                                <div className="tfDash">
                                    <div><p>Balance</p></div>
                                    <div><p style={{ fontSize: '40px', fontWeight: '700' }}>Rp120.000</p></div>
                                    <div><p>+62 813-9387-7946</p></div>
                                </div>

                                <div className="btnTfMain" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '30px', color: '#FFFFFF' }}>
                                    <div className='regis'> <FiPlus /> <Link href="/search-tf/">Transfer</Link></div>
                                    <div className='regis'> <FiArrowUp /><Link href="/topup/"> Top Up</Link></div>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row gap-3 mainstat">
                            <Col md={7} className='d-flex flex-column' style={{ borderRadius: '25px', background: '#B1D0E0' }}>
                                <div className="mainDashboard">
                                    <div className="d-flex flex-column gap-2">
                                        <FiArrowDown />
                                        <p>income</p>
                                        <p style={{ color: '#3A3D42', fontSize: '18px', fontWeight: 'bold' }}>Rp2.120.000</p>
                                    </div>
                                    <div className="d-flex flex-column gap-2">
                                        <FiArrowUp />
                                        <p>expanse</p>
                                        <p style={{ color: '#3A3D42', fontSize: '18px', fontWeight: 'bold' }}>Rp2.120.000</p>
                                    </div>
                                </div>
                                <div className="mainDashboardImg img-fluid">
                                    <Image style={{ padding: '5px 30px', maxWidth: '100%', height: 'auto' }} src={statistic} alt="imagestat" />
                                </div>

                            </Col>
                            <Col md={5} className='d-flex flex-column transhistorydahsboard' style={{ background: '#B1D0E0', borderRadius: '25px' }}>
                                <div className=" d-flex flex-row" style={{ justifyContent: 'space-between', paddingBottom: '30px' }}>
                                    <div >
                                        <p style={{ fontSize: '17px', fontWeight: 'bold' }}>Transaction History</p>
                                    </div>

                                    <div className='seeall'>
                                        <Link href="/history">See all</Link>
                                    </div>
                                </div>
                                <div className="d-flex flex-row" style={{ justifyContent: 'space-between' }}>
                                    <div className="d-flex flex-row gap-2">
                                        <Image style={{ maxWidth: '100%', width: '50px', height: '50px' }} src={p1} alt="photo" />
                                        <div className="d-flex flex-column" >
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>Transfer</p>
                                        </div>
                                    </div>

                                    <div>  <p style={{ fontSize: '16px', fontWeight: 'bold', color: 'green' }}>+50.000</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row" style={{ justifyContent: 'space-between' }}>
                                    <div className="d-flex flex-row gap-2">
                                        <Image style={{ maxWidth: '100%', width: '50px', height: '50px' }} src={p1} alt="photo" />
                                        <div className="d-flex flex-column" >
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>Transfer</p>
                                        </div>
                                    </div>

                                    <div>  <p style={{ fontSize: '16px', fontWeight: 'bold', color: 'green' }}>+50.000</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row" style={{ justifyContent: 'space-between' }}>
                                    <div className="d-flex flex-row gap-2">
                                        <Image style={{ maxWidth: '100%', width: '50px', height: '50px' }} src={p1} alt="photo" />
                                        <div className="d-flex flex-column" >
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>Transfer</p>
                                        </div>
                                    </div>

                                    <div>  <p style={{ fontSize: '16px', fontWeight: 'bold', color: 'green' }}>+50.000</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row" style={{ justifyContent: 'space-between' }}>
                                    <div className="d-flex flex-row gap-2">
                                        <Image style={{ maxWidth: '100%', width: '50px', height: '50px' }} src={p1} alt="photo" />
                                        <div className="d-flex flex-column" >
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>Transfer</p>
                                        </div>
                                    </div>

                                    <div>  <p style={{ fontSize: '16px', fontWeight: 'bold', color: 'green' }}>+50.000</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row" style={{ justifyContent: 'space-between' }}>
                                    <div className="d-flex flex-row gap-2">
                                        <Image style={{ maxWidth: '100%', width: '50px', height: '50px' }} src={p1} alt="photo" />
                                        <div className="d-flex flex-column" >
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>Transfer</p>
                                        </div>
                                    </div>

                                    <div>  <p style={{ fontSize: '16px', fontWeight: 'bold', color: 'green' }}>+50.000</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row" style={{ justifyContent: 'space-between' }}>
                                    <div className="d-flex flex-row gap-2">
                                        <Image style={{ width: '50px', height: '50px' }} src={p1} alt="user1" />
                                        <div className="d-flex flex-column" >
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>Transfer</p>
                                        </div>
                                    </div>

                                    <div>  <p style={{ fontSize: '16px', fontWeight: 'bold', color: 'green' }}>+50.000</p>
                                    </div>
                                </div>


                            </Col>
                        </div>

                    </Col>
                </Row>
            </section>
            <footer >
                <Footer />
            </footer>

        </>
    )
}

export default Home