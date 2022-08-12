import React from 'react'
import { Navbar, Row, Col, Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link';
import * as Yup from 'yup'
import phonelogin from '../../public/images/phonelogin.png';

import { useDispatch, useSelector } from 'react-redux';

const CreatePinForm = (props) => {

    const successMsg = useSelector((state) => state.auth.successMsg);
    const errorMsg = useSelector((state) => state.auth.errorMsg);

    // React.useEffect(() => {
    //     if (successMsg) {
    //         navigate("/createpinsuccess", { state: { successMsg } });
    //     }
    // }, [navigate, successMsg]);

    return (
        <>
            <Form className='pin-input-wrapper' noValidate onSubmit={props.handleSubmit}>
                {/* {errorMsg && <Alert variant="danger">{errorMsg}</Alert>} */}

                <Form.Group className="pin-form-wrap">
                    <Form.Control className="pin-form-input"
                        name="pin1"
                        onChange={props.handleChange}
                        type="number"
                        value={props.values.pin1}
                    // isInvalid={!!props.errors.username}
                    />
                </Form.Group>

                <Form.Group className="pin-form-wrap">
                    <Form.Control className="pin-form-input"
                        name="pin2"
                        onChange={props.handleChange}
                        type="number"
                        value={props.values.pin2}
                    // isInvalid={!!props.errors.username}
                    />
                </Form.Group>
                <Form.Group className="pin-form-wrap">
                    <Form.Control className="pin-form-input"
                        name="pin3"
                        onChange={props.handleChange}
                        type="number"
                        value={props.values.pin3}
                    // isInvalid={!!props.errors.username}
                    />
                </Form.Group>
                <Form.Group className="pin-form-wrap">
                    <Form.Control className="pin-form-input"
                        name="pin4"
                        onChange={props.handleChange}
                        type="number"
                        value={props.values.pin4}
                    // isInvalid={!!props.errors.username}
                    />
                </Form.Group>
                <Form.Group className="pin-form-wrap">
                    <Form.Control className="pin-form-input"
                        name="pin5"
                        onChange={props.handleChange}
                        type="number"
                        value={props.values.pin5}
                    // isInvalid={!!props.errors.username}
                    />
                </Form.Group>
                <Form.Group className="pin-form-wrap">
                    <Form.Control className="pin-form-input"
                        name="pin6"
                        onChange={props.handleChange}
                        type="number"
                        value={props.values.pin6}
                    // isInvalid={!!props.errors.username}
                    />
                </Form.Group>
            </Form>
            <div className='wraper-pin' >
                <div className="d-grid ">
                    <Button className='btn btn-fw9' type='submit'>Confirm</Button>
                </div>
            </div>

        </>
    )
}

function PinCreate() {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);


    const onCreatePin = (value) => {
        const data = { email: value.email, password: value.password };
        dispatch(createpin(data));
    };

    // React.useEffect(() => {
    //     if (token) {
    //         navigate('/createpin')
    //     }
    // }, [navigate, token])
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
                                onSubmit={onCreatePin}
                                initialValues={{ email: '', password: '' }}
                            //validationSchema={loginSchema}
                            >
                                {(props) => <CreatePinForm {...props} />}
                            </Formik>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default PinCreate