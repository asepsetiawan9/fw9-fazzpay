import React, { useState } from 'react'
import NavbarDash from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image'
import Link from 'next/link';
//photo
import p1 from '../../public/images/p1.png'
import { FiThermometer } from 'react-icons/fi'


function TransConfirm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Transfer To</p>
                                </div>
                            </div>
                            <div className="wrapTrasn">
                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-row gap-4" style={{ padding: '5px 20px' }}>
                                        <Image style={{ width: '50px', height: '50px' }} src={p1} alt="user1" />
                                        <div className="d-flex flex-column">
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>+62 813-8492-9994</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Details</p>
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
                                {/* style={{ padding: '10px 26px' }} */}
                                <div style={{ textAlign: 'right', padding: '20px 50px 30px 0px' }}>
                                    <div className='btn-Continue'>
                                        <Button onClick={handleShow} >continue</Button>
                                    </div>
                                </div>
                            </div>

                            <Modal show={show} onHide={handleClose} style={{ color: '#1A374D' }}>
                                <Modal.Header style={{ borderBottom: 'unset' }} closeButton>
                                    <Modal.Title>
                                        <div>
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Enter PIN to Transfer</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '16px' }}>Enter your 6 digits PIN for confirmation to <br /> continue transferring money. </p>
                                        </div>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="pin-input-wrapper ">

                                        <div className="pin-form-wrap">
                                            <input type="text" className="pin-form-input" />
                                        </div>

                                        <div className="pin-form-wrap">
                                            <input type="text" className="pin-form-input" />
                                        </div>

                                        <div className="pin-form-wrap">
                                            <input type="text" className="pin-form-input" />
                                        </div>

                                        <div className="pin-form-wrap">
                                            <input type="text" className="pin-form-input" />
                                        </div>

                                        <div className="pin-form-wrap">
                                            <input type="text" className="pin-form-input" />
                                        </div>

                                        <div className="pin-form-wrap">
                                            <input type="text" className="pin-form-input" />
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer style={{ borderTop: 'unset' }}>
                                    <div className='btn-Continue'>
                                        <Link href={'/fail-tf'} style={{ padding: '10px 26px', background: 'red' }}  >
                                            Fail
                                        </Link>
                                    </div>
                                    <div className='btn-Continue'>
                                        <Link href={'/success-tf'} style={{ padding: '10px 26px' }} className='btn btn-fw9' >
                                            Save Changes
                                        </Link>
                                    </div>
                                </Modal.Footer>
                            </Modal>

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

export default TransConfirm