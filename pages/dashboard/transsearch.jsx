import React from 'react'
import NavbarDash from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link';
//photo
import p1 from '../../public/images/p1.png'
import p2 from '../../public/images/p2.png'
import p3 from '../../public/images/p3.png'

function TransSearch() {
    return (
        <>
            <section className='headerDashboard'>
                <Header />
            </section>

            <section style={{ padding: '20px 150px', backgroundColor: '#1A374D', color: '#1A374D' }} className='mainSection'>
                <Row className='min-vh-100 mw-100'>
                    <NavbarDash />
                    <Col md={9} className='px-4 d-flex flex-column'>
                        <div className='d-flex flex-column gap-2' style={{ background: '#B1D0E0', borderRadius: '20px' }}>
                            <div className="d-flex flex-column gap-3" style={{ justifyContent: 'space-between', padding: '30px 25px' }} >
                                <div>
                                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Search Reciver</p>
                                </div>
                                <div>
                                    <input className="form-control form-control-lg" type="text" placeholder="Search" aria-label=".form-control-lg example" style={{
                                        background: '#6998AB',
                                        borderRadius: '12px', border: 'unset', color: '#1A374D'
                                    }} />
                                </div>
                            </div>
                            <div className="wrapTrasn">
                                <Link className='cardSearchTrans' href={"/transinput/"}>
                                    <div className="d-flex flex-row gap-4" style={{ padding: '0px 20px' }}>
                                        <Image style={{ width: '50px', height: '50px' }} src={p1} alt="user1" />
                                        <div className="d-flex flex-column">
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>+62 813-8492-9994</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link className='cardSearchTrans' href={"/transinput/"}>
                                    <div className="d-flex flex-row gap-4" style={{ padding: '0px 20px' }}>
                                        <Image style={{ width: '50px', height: '50px' }} src={p1} alt="user1" />
                                        <div className="d-flex flex-column">
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>+62 813-8492-9994</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link className='cardSearchTrans' href={"/transinput/"}>
                                    <div className="d-flex flex-row gap-4" style={{ padding: '0px 20px' }}>
                                        <Image style={{ width: '50px', height: '50px' }} src={p1} alt="user1" />
                                        <div className="d-flex flex-column">
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>+62 813-8492-9994</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link className='cardSearchTrans' href={"/transinput/"}>
                                    <div className="d-flex flex-row gap-4" style={{ padding: '0px 20px' }}>
                                        <Image style={{ width: '50px', height: '50px' }} src={p1} alt="user1" />
                                        <div className="d-flex flex-column">
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>+62 813-8492-9994</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link className='cardSearchTrans' href={"/transinput/"}>
                                    <div className="d-flex flex-row gap-4" style={{ padding: '0px 20px' }}>
                                        <Image style={{ width: '50px', height: '50px' }} src={p1} alt="user1" />
                                        <div className="d-flex flex-column">
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>+62 813-8492-9994</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
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

export default TransSearch