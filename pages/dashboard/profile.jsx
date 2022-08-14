import React from 'react'
import NavbarDash from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link';
import Image from 'next/image'
//photo
import p1 from '../../public/images/p1.png'
//icon
import { FiEdit2, FiArrowRight } from "react-icons/fi";

//photo

function Profile() {
    return (
        <>
            <section className='headerDashboard'>
                <Header />
            </section>

            <section style={{ padding: '20px 150px', backgroundColor: '#1A374D', color: '#1A374D' }} className='mainSection'>
                <Row className='min-vh-100 mw-100'>
                    <NavbarDash />
                    <Col md={9} className='px-4 d-flex flex-column'>
                        <div className='d-flex flex-column ' style={{ background: '#B1D0E0', borderRadius: '20px' }}>
                            <div className="d-flex flex-column gap-1" style={{ justifyContent: 'center', padding: '50px 25px', alignItems: 'center' }} >
                                <div>
                                    <Image src={p1} alt='useredit' />
                                </div>
                                <div>
                                    <FiEdit2 /> Edit
                                </div>
                                <div>
                                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Robert Chandler</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '16px' }}>+62 813-9387-7946</p>
                                </div>
                            </div>
                            <div className='d-flex flex-column gap-3' style={{ marginBottom: '50px' }}>
                                <Link className="wrapTrasn" href='/personal-info' style={{ textDecoration: 'none', color: '#1A374D' }}>
                                    <div className='cardProfile'>
                                        <div><p style={{ fontSize: '17px', fontWeight: 'bold' }}>Personal Information</p></div>
                                        <div><FiArrowRight /></div>
                                    </div>
                                </Link>

                                <Link className="wrapTrasn" href='/change-pass' style={{ textDecoration: 'none', color: '#1A374D' }}>
                                    <div className='cardProfile'>
                                        <div><p style={{ fontSize: '17px', fontWeight: 'bold' }}>Change Password</p></div>
                                        <div><FiArrowRight /></div>
                                    </div>
                                </Link>

                                <Link className="wrapTrasn" href='/change-pin' style={{ textDecoration: 'none', color: '#1A374D' }}>
                                    <div className='cardProfile'>
                                        <div><p style={{ fontSize: '17px', fontWeight: 'bold' }}>Change PIN</p></div>
                                        <div><FiArrowRight /></div>
                                    </div>
                                </Link>

                                <Link className="wrapTrasn" href='/topup' style={{ textDecoration: 'none', color: '#1A374D' }}>
                                    <div className='cardProfile'>
                                        <div><p style={{ fontSize: '17px', fontWeight: 'bold' }}>Logout</p></div>
                                        <div><FiArrowRight /></div>
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

export default Profile