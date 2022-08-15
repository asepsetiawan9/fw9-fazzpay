import React from 'react';
import { Row, Col, Form, Navbar, Alert, Button } from 'react-bootstrap'
import Image from 'next/image'
import { FiMail, FiLock, FiEye, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../stores/actions/auth';
import phonelogin from '../../public/images/phonelogin.png';
import { useRouter } from 'next/router'


const signupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address format').required('Required'),
  password: Yup.string().min(3).required('Required')
})

const SignUpForm = (props) => {
  const navigate = useRouter()
  const success = useSelector((state) => state.auth.successMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);
  // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  //console.log(errorMsg);

  React.useEffect(() => {
    if (success) {
      navigate.push('/login')
    }
  }, [success])

  const style = { color: "#1A374D", fontSize: "1.5em" }
  return (
    <>
      <Form className='d-flex flex-column gap-3' noValidate onSubmit={props.handleSubmit}>
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiUser style={style} />
          </div>
          <Form.Control name="firstName" onChange={props.handleChange} type="text" placeholder="Enter firstName" isInvalid={!!props.errors.firstName} />
          <Form.Control.Feedback type="invalid">{props.errors.firstName}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiUser style={style} />
          </div>
          <Form.Control name="lastName" onChange={props.handleChange} type="text" placeholder="Enter lastName" isInvalid={!!props.errors.lastName} />
          <Form.Control.Feedback type="invalid">{props.errors.lastName}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiMail style={style} />
          </div>
          <Form.Control name="email" onChange={props.handleChange} type="email" placeholder="Enter email" isInvalid={!!props.errors.email} />
          <Form.Control.Feedback type="invalid">{props.errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiLock style={style} />
          </div>
          <Form.Control name="password" onChange={props.handleChange} type="password" placeholder="Password" isInvalid={!!props.errors.password} />
          <Form.Control.Feedback type="invalid">{props.errors.password}</Form.Control.Feedback>
        </Form.Group>

        <div className="d-grid ">
          <Button className='btn btn-fw9' type="submit">Sign Up</Button>
        </div>
        <div className="text-center">
          Already have an account? Lets
          <Link style={{ textDecoration: 'none', color: '#406882' }} href={"/auth/signin/"}> Login</Link>

        </div>
      </Form>
    </>
  )
}

function Signup() {
  const navigate = useRouter()
  const style = { color: "#1A374D", fontSize: "1.5em" }
  const dispatch = useDispatch()
  const successmsg = useSelector((state => state.auth.successmsg))
  const signUpRequest = (val) => {
    const request = { firstName: val.firstName, lastName: val.lastName, email: val.email, password: val.password }
    dispatch(register(request));
  }
  React.useEffect(() => {
    if (successmsg) {
      navigate.push('/login')
    }
  }, [successmsg])

  // const navigate = useRouter()
  // const handleSignup = async (value) => {
  //   try {
  //     const result = await axios.post('auth/register', value)
  //     // Cookies.set('token', result.data.data.token)
  //     // Cookies.set('id', result.data.data.id)
  //     if (Cookies.get('token') !== null) {
  //       navigate.push('/home')
  //     }
  //   } catch (e) {
  //     console.log(e.response);
  //     window.alert(e.response.data.msg)
  //   }
  // }

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
                onSubmit={signUpRequest}
                initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
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