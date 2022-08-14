import React from 'react'
import NavbarDash from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link';

import { FiPhone } from "react-icons/fi";



function PhoneAdd() {

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
                                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Add Phone Number</p>
                                </div>
                            </div>
                            <div className="wrapTrasn ">
                                <div>
                                    <p style={{ fontSize: '16px' }}>Add at least one phone number for the transfer <br /> ID so you can start transfering your money to <br /> another user.</p>
                                </div>

                                <div className='d-flex flex-column gap-4 addPhone' >
                                    <div className="input-group " >
                                        <div className="input-group-text">
                                            <div style={{ color: '#1A374D' }}>
                                                <FiPhone /> +62
                                            </div>

                                        </div>
                                        <input type="number" className="form-control" placeholder="Enter your phone number" />
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center', padding: '20px 50px' }}>
                                    <div className='btn-Continue'>
                                        <Link href={"/profile/"}>Add Phone Number</Link>
                                    </div>
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

export default PhoneAdd