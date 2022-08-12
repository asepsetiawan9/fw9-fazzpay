import React from 'react'
import { Navbar, Row, Col, Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link';
import * as Yup from 'yup'
import phonelogin from '../../public/images/phonelogin.png';

import { useDispatch, useSelector } from 'react-redux';
//icon
import success from '../../public/images/success.png'


function CreatePinSuccess() {
    return (
        <>
            <Row >
                <Col md={7} style={{ padding: '0px' }}>
                    <div className='parent'>
                        <Navbar>
                            <div className='titleapp' >
                                <Link href='/auth/signin'>ART-TOS</Link>
                            </div>
                        </Navbar>
                        <div className="d-flex flex-column align-items-center">
                            <div>
                                <Image src={phonelogin} alt="phonelogin" />
                            </div>
                            <div >
                                <h1>App that Covering Banking Needs</h1>
                                <p>Zwallet is an application that focussing in banking needs for all users
                                    in the world. Always updated and always following world trends.
                                    5000+ users registered in Zwallet everyday with worldwide
                                    users coverage.</p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={5} style={{ padding: '0px', background: '#B1D0E0' }}>
                    <div className='form-login1 '>
                        <div className='secTitle'>
                            <Link href="/auth/signin">ART-TOS</Link>
                        </div>
                        <Image style={{ height: '50px', width: '50px' }} src={success} alt='success' />
                        <h3>Your PIN Was Successfully Created</h3>
                        <p>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
                        <div className='wraper-pin' >
                            <div className="d-grid ">
                                <Button className='btn btn-fw9' href={"/dashboard/"}>Login Now</Button>
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>
        </>

    )
}

export default CreatePinSuccess