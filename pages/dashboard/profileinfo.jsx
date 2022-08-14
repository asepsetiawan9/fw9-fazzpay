import React from 'react'
import NavbarDash from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link';
import Image from 'next/image'
//photo
import p1 from '../../public/images/p1.png'

function ProfileInfo() {
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
                            <div className="d-flex flex-column" style={{ justifyContent: 'space-between', padding: '30px 25px' }} >
                                <div>
                                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Personal Information</p>
                                </div>
                            </div>
                            <div className="wrapTrasn">
                                <div>
                                    <p style={{ fontSize: '16px' }}>We got your personal information from the sign <br /> up proccess. If you want to make changes on<br /> your information, contact our support.</p>
                                </div>

                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-column" style={{ padding: '20px 0px 0px 20px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '-10px' }}>First Name</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Robert</p>
                                    </div>
                                </div>

                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-column" style={{ padding: '20px 0px 0px 20px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '-10px' }}>Last Name</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Chandler</p>
                                    </div>
                                </div>

                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-column" style={{ padding: '20px 0px 0px 20px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '-10px' }}>Verified E-mail</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>pewdiepie1@gmail.com</p>
                                    </div>
                                </div>
                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-column" style={{ padding: '20px 0px 0px 20px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '-10px' }}>Phone Number</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>+62 813-9387-7946</p>
                                    </div>
                                    <div style={{ paddingTop: '10px', textDecoration: 'none', fontSize: '15px' }}><Link href='/phonemanage'> Manage </Link></div>
                                </div>

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

export default ProfileInfo