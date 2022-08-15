import React, { useState, useEffect } from 'react'
import axios from '../../helper/axios'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import NavbarDash from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { Row, Col, Form } from 'react-bootstrap'
import Link from 'next/link';
import { Formik } from 'formik'
import * as Yup from 'yup'

import { FiEye, FiLock } from "react-icons/fi";


const passNewSchema = Yup.object().shape({
    currentpassword: Yup.string().min(6).required('Password is required'),
    password: Yup.string().min(6).required('Password is required'),
    passwordConfirmation: Yup.string().min(6)
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const PassNewForm = ({ errors }) => {
    // const [form, setForm] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });
    // const [data, setData] = useState([]);

    // const handleChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // };

    // const router = useRouter();

    // const handleSubmit = async () => {
    //     try {
    //         console.log(form);
    //         const id = Cookies.get('id');
    //         const result = await axios.patch(`user/password/${id}`, form);
    //         console.log(result);
    //         router.push('/profile');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const style = { color: "#1A374D", fontSize: "1.5em" }
    return (
        <>
            <Form className='d-flex flex-column gap-3' noValidate onSubmit={handleSubmit}>

                <Form.Group className="input-group mb-3">
                    <div className="input-group-text">
                        <FiLock style={style} />
                    </div>
                    <Form.Control name="currentpassword" onChange={handleChange} type="password" placeholder="Current Password" isInvalid={!!errors.currentpassword} />
                    <div className="input-group-text">
                        <FiEye style={style} />
                    </div>
                    <Form.Control.Feedback type="invalid">{errors.currentpassword}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="input-group mb-3">
                    <div className="input-group-text">
                        <FiLock style={style} />
                    </div>
                    <Form.Control name="password" onChange={handleChange} type="password" placeholder="New Password" isInvalid={!!errors.password} />
                    <div className="input-group-text">
                        <FiEye style={style} />
                    </div>
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="input-group mb-3">
                    <div className="input-group-text">
                        <FiLock style={style} />
                    </div>
                    <Form.Control name="passwordConfirmation" onChange={handleChange} type="password" placeholder="Repeat New Password" isInvalid={!!errors.passwordConfirmation} />
                    <div className="input-group-text">
                        <FiEye style={style} />
                    </div>
                    <Form.Control.Feedback type="invalid">{errors.passwordConfirmation}</Form.Control.Feedback>
                </Form.Group>

                <div style={{ textAlign: 'right', padding: '20px 50px' }}>
                    <div className='btn-Continue'>
                        <Link href={"/profile/"}>Change Password</Link>
                    </div>
                </div>
            </Form>
        </>
    )
}


function PassChange() {

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
                                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Change Password</p>
                                </div>
                            </div>
                            <div className="wrapTrasn">
                                <div>
                                    <p style={{ fontSize: '16px' }}>You must enter your current password and then <br /> type your new password twice.</p>
                                </div>

                                <div className='d-flex flex-column gap-4 passChange'>
                                    <Formik
                                        // onSubmit={onLoginRequest}
                                        initialValues={{ currentpassword: '', password: '', passwordConfirmation: '' }}
                                        validationSchema={passNewSchema}>
                                        {(props) => <PassNewForm {...props} />}
                                    </Formik>
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

export default PassChange