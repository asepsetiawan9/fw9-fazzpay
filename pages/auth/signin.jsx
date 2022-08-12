import React from 'react';
import { Row, Col, Form, Navbar, Alert, Button } from 'react-bootstrap'
import Image from 'next/image'
import { FiMail, FiLock } from 'react-icons/fi';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup'
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import phonelogin from '../../public/images/phonelogin.png';
import login from '../../stores/actions/auth';
import Router from 'next/router';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().required('Required')
})
const LoginForm = ({ errors, handleSubmit, handleChange }) => {
    const successMsg = useSelector((state) => state.auth.successMsg);
    const errorMsg = useSelector((state) => state.auth.errorMsg);

    const style = { color: "#1A374D", fontSize: "1.5em" }
    return (
        <>
            <Form className='d-flex flex-column gap-2'
                noValidate
                onSubmit={handleSubmit}>
                {successMsg && <Alert variant="success">{successMsg}</Alert>}
                {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

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
                    <Link href={"/forgot/"}>Forgot Password?</Link>
                </div>

                <div className="d-grid ">
                    <Button type="submit" className='btn btn-fw9'>Login</Button>
                </div>
                <div className="text-center" style={{ marginTop: '10px' }}>
                    Dont have an account? Lets
                    <Link style={{ textDecoration: 'none', color: '#406882' }} href={"/signup/"}> Sign Up</Link>

                </div>
            </Form>
        </>
    )
}

const Signin = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    const loginRequest = (val) => {
        console.log(val);
        const request = { email: val.email, password: val.password }
        if (val.email === '' && val.password === '') {
            window.alert('Write Your Email and Password')
        } else {
            dispatch(login(request))
        }
    }

    React.useEffect(() => {
        if (token) {
            Router.push('/home');
        }
    }, [token]);
    return (
        <>
            <Row >
                <Col md={7} style={{ padding: '0px' }}>
                    <div className='parent'>
                        <Navbar>
                            <div className='titleapp' >
                                <Link href='/reset-password'>ART-TOS</Link>
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
                            <Link href="/login/">ART-TOS</Link>
                        </div>
                        <h3>Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users</h3>
                        <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>

                        <div className='d-flex flex-column gap-5' >
                            <Formik
                                onSubmit={loginRequest}
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