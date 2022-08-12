import React from 'react';
import { Row, Col, Form, Navbar, Alert, Button } from 'react-bootstrap'
import Image from 'next/image'
import { FiMail, FiLock, FiEye, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup'
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import phonelogin from '../../public/images/phonelogin.png';
import register from "../redux/asyncActions/auth";
import Router from 'next/router';


const signupSchema = Yup.object().shape({
  username: Yup.string().min(6).required('Required'),
  email: Yup.string().email('Invalid email address format').required('Required'),
  password: Yup.string().min(6).required('Required')
})

const SignUpForm = (props) => {
  const navigate = useNavigate();
  const successMsg = useSelector((state) => state.auth.successMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);

  React.useEffect(() => {
    if (successMsg) {
      navigate("/login", { state: { successMsg } });
    }
  }, [navigate, successMsg]);

  const style = { color: "#1A374D", fontSize: "1.5em" }
  return (
    <>
      <Form className='d-flex flex-column gap-3' noValidate onSubmit={props.handleSubmit}>
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiUser style={style} />
          </div>
          <Form.Control name="username" onChange={props.handleChange} type="text" placeholder="Enter username" value={props.values.username} isInvalid={!!props.errors.username} />
          <Form.Control.Feedback type="invalid">{props.errors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiMail style={style} />
          </div>
          <Form.Control name="email" onChange={props.handleChange} type="email" placeholder="Enter email" value={props.values.email} isInvalid={!!props.errors.email} />
          <Form.Control.Feedback type="invalid">{props.errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiLock style={style} />
          </div>
          <Form.Control name="password" onChange={props.handleChange} type="password" placeholder="Password" value={props.values.password} isInvalid={!!props.errors.password} />
          <Form.Control.Feedback type="invalid">{props.errors.password}</Form.Control.Feedback>
        </Form.Group>
        <div className="d-grid ">
          <Button className='btn btn-fw9' to={"/createpin/"} type="submit">Sign Up</Button>
        </div>
        <div className="text-center">
          Already have an account? Lets
          <Link style={{ textDecoration: 'none', color: '#406882' }} to={"/login/"}> Login</Link>

        </div>
      </Form>
    </>
  )
}

function Signup() {
  const style = { color: "#1A374D", fontSize: "1.5em" }
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const onRegister = (value) => {
    dispatch(register(value));
  };

  React.useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate, token]);

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
                onSubmit={onRegister}
                initialValues={{ email: '', password: '' }}
                validationSchema={signupSchema}>
                {(props) => <SignUpForm {...props} />}
              </Formik>

            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}



export default Signup