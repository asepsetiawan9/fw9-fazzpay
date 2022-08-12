import React from 'react'
import { Navbar, Row, Col, Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link';
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import phonelogin from '../../public/images/phonelogin.png';
//icon

import { FiMail } from "react-icons/fi";


const forgotPassSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required')
})

const EmailForm = ({ errors, handleSubmit, handleChange }) => {
    const style = { color: "#1A374D", fontSize: "1.5em" }
    console.log(errors)
    return (
        <>
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="input-group mb-3">
                    <div className="input-group-text">
                        <FiMail style={style} />
                    </div>
                    <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" isInvalid={!!errors.email} />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid ">
                    <Button className='btn btn-fw9' href={"/passnew/"}>Reset Password</Button>
                </div>
            </Form>
        </>
    )
}
function PassForgot() {
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
                        <h3>Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users</h3>
                        <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                        <div className='d-flex flex-column gap-5' >
                            <Formik
                                // onSubmit={onLoginRequest}
                                initialValues={{ email: '' }}
                                validationSchema={forgotPassSchema}>
                                {(props) => <EmailForm {...props} />}
                            </Formik>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default PassForgot