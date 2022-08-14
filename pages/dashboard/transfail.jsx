import React, { useState } from 'react'
import NavbarDash from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link';
//photo
import p1 from '../../public/images/p1.png'
import fail from '../../public/images/failed.png'
//icon
import { FiShare2 } from "react-icons/fi";

function TransFail() {

    return (
        <>
            <section className='headerDashboard'>
                <Header />
            </section>

            <section style={{ padding: '20px 150px', backgroundColor: '#1A374D', color: '#1A374D' }} className='mainSection'>
                <Row className='min-vh-100 mw-100'>
                    <NavbarDash />
                    <Col md={9} className='px-4 d-flex flex-column'>
                        <div className='d-flex flex-column transferTo' style={{ background: '#B1D0E0', borderRadius: '20px' }}>

                            <div className="wrapTrasn">

                                <div className='d-flex flex-column gap-2 img-fluid' style={{ padding: '60px 0px 10px 0px', textAlign: 'center', alignItem: 'center' }}>
                                    <div><Image style={{ width: '50px', height: '50px' }} src={fail} alt="fail" /></div>
                                    <div><p> Transfer Failed</p></div>
                                    <div>We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</div>
                                </div>

                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-column" style={{ padding: '20px 0px 0px 20px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '-10px' }}>Amount</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Rp100.000</p>
                                    </div>
                                </div>
                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-column" style={{ padding: '20px 0px 0px 20px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '-10px' }}>Balance Left</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Rp20.000</p>
                                    </div>
                                </div>
                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-column" style={{ padding: '20px 0px 0px 20px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '-10px' }}>Date & Time</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>May 11, 2020 - 12.20</p>
                                    </div>
                                </div>
                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-column" style={{ padding: '20px 0px 0px 20px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '-10px' }}>Notes</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>For buying some socks</p>
                                    </div>
                                </div>

                                <div>
                                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Transfer to</p>
                                </div>

                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-row gap-4 img-fluid" style={{ padding: '5px 20px' }}>
                                        <Image style={{ width: '50px', height: '50px' }} src={p1} alt="user1" />
                                        <div className="d-flex flex-column">
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>+62 813-8492-9994</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right', padding: '20px 50px 30px 0px' }}>
                                    <div className='btn-Continue'>
                                        <Link href={"/transinput/"}>continue</Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Col>

                </Row>

            </section>

            <footer >
                <>
                    <Footer />
                </>
            </footer>

        </>
    )
}

export default TransFail