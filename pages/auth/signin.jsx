import React from 'react';
import Image from 'next/image'
import axios from '../../helper/axios'
import Cookies from 'js-cookie'
import Link from 'next/link';
import { Formik } from 'formik';
import { useRouter } from 'next/router'
import { FiMail, FiLock } from 'react-icons/fi';
import { Row, Col, Form, Navbar, Button } from 'react-bootstrap'
import * as Yup from 'yup'

import phonelogin from '../../public/images/phonelogin.png';


const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().required('Required')
})
const LoginForm = ({ errors, handleSubmit, handleChange }) => {

    const style = { color: "#1A374D", fontSize: "1.5em" }
    return (
        <>
            <Form className='d-flex flex-column gap-2'
                noValidate
                onSubmit={handleSubmit}>

                <Form.Group className="input-group mb-3">
                    <div className="input-group-text"><FiMail style={style} /> </div>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="input-group mb-3">
                    <div className="input-group-text">
                        <FiLock style={style} />
                    </div>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        isInvalid={!!errors.password} />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>

                <div className="text-end" style={{ marginTop: '-10px', marginBottom: '10px', textDecoration: 'none', color: '#406882' }}>
                    <Link href={"/auth/passforgot"}>Forgot Password?</Link>
                </div>

                <div className="d-grid ">
                    <Button type="submit" className='btn btn-fw9'>Login</Button>
                </div>
                <div className="text-center" style={{ marginTop: '10px' }}>
                    Dont have an account? Lets
                    <Link style={{ textDecoration: 'none', color: '#406882' }} href={"/auth/Signup/"}> Sign Up</Link>

                </div>
            </Form>
        </>
    )
}

const Signin = () => {
    const navigate = useRouter()
    const handleLogin = async (value) => {
        try {
            const result = await axios.post('auth/login', value)
            Cookies.set('token', result.data.data.token)
            Cookies.set('id', result.data.data.id)
            if (Cookies.get('token') !== null) {
                navigate.push('/home')
            }
        } catch (e) {
            console.log(e.response);
            window.alert(e.response.data.msg)
        }
    }
    return (
        <>
            <Row >
                <Col md={7} style={{ padding: '0px' }}>
                    <div className='parent'>
                        <Navbar>
                            <div className='titleapp' >
                                <Link href='/auth/Sigin'>ART-TOS</Link>
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
                                onSubmit={handleLogin}
                                initialValues={{ email: '', password: '' }}
                                validationSchema={loginSchema}
                            >
                                {(props) => <LoginForm {...props} />}
                            </Formik>

                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Signin