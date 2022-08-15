import React from 'react'
import NavbarDash from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { Row, Col, Form } from 'react-bootstrap'
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image'
import { Formik } from 'formik'
import * as Yup from 'yup'
//photo
import p1 from '../../public/images/p1.png'

const amountSchema = Yup.object().shape({
    amount: Yup.number().positive("Must be more than 0")
        .integer("Must be more than 0")
        .required("This field is required")
        .max(10000000, 'Max Amount is 10.000.000')
})

const AmountForm = () => {
    const [dataRecipient, setDataRecipient] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const recipient = Cookies.get('recipientID');
    const [form, setForm] = useState({ receiverId: recipient, amount: '', notes: '' });

    useEffect(() => {
        getData();
    }, []);

    const handleChangeText = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const getData = async () => {
        try {
            const user = Cookies.get('id');
            const resultRecipient = await axios.get(`user/profile/${recipient}`);
            const resultUser = await axios.get(`user/profile/${user}`);
            setDataRecipient(resultRecipient.data.data);
            setDataUser(resultUser.data.data);
            // console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    const router = useRouter();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            console.log(form);
            dispatch(transferData(form));
            // console.log(user.transferData);
            router.push('/confirmation');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Form noValidate onSubmit={handleSubmit}>
                <div className="inputAmount">
                    <div>
                        <Form.Control className="form-control wrap-amount text-center" style={{ borderBottom: 'unset', fontSize: '42px', color: '#1A374D', paddingTop: '40px', fontWeight: '900', borderBottom: 'none!important' }} name="amount" onChange={handleChange} type="number" placeholder="0.00" isInvalid={!!errors.amount} />
                        <Form.Control.Feedback className="wrap-amount text-center" type="invalid">{errors.amount}</Form.Control.Feedback>

                    </div>

                    <div>
                        <p style={{ fontSize: '16px', color: '#1A374D', fontWeight: '700' }}>Rp120.000 Available</p>
                    </div>
                    <div className="input-group" style={{ paddingLeft: '150px', paddingRight: '150px' }}>
                        <div className="input-group-text"><i data-feather="edit-2"></i>
                        </div>
                        <input type="text" className="form-control" placeholder="Add some notes" />
                    </div>

                </div>
                <div style={{ textAlign: 'right', padding: '20px 50px 30px 0px' }}>
                    <div className='btn-Continue'>
                        <Link href={"/confirm-tf/"}>continue</Link>
                    </div>
                </div>
            </Form>
        </>
    )
}

function TransSearch() {
    return (
        <>
            <section className='headerDashboard'>
                <Header />
            </section>

            <section style={{ padding: '20px 150px', backgroundColor: '#1A374D', color: '#1A374D' }} className='mainSection'>
                <Row className='min-vh-100 mw-100'>
                    <NavbarDash />
                    <Col md={9} className='px-4 d-flex flex-column'>
                        <div className='d-flex flex-column gap-2' style={{ background: '#B1D0E0', borderRadius: '20px' }}>
                            <div className="d-flex flex-column gap-3" style={{ justifyContent: 'space-between', padding: '30px 25px' }} >
                                <div>
                                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Transfer Money</p>
                                </div>

                            </div>
                            <div className="wrapTrasn">
                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-row gap-4" style={{ padding: '0px 20px' }}>
                                        <Image style={{ width: '50px', height: '50px' }} src={p1} alt="user1" />
                                        <div className="d-flex flex-column">
                                            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Samuel Suhei</p>
                                            <p style={{ fontSize: '14px', marginTop: '-15px' }}>+62 813-8492-9994</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p style={{ fontSize: '16px', color: '#7A7886', paddingLeft: '30px' }}>Type the amount you want to transfer and then <br />
                                    press continue to the next steps.</p>
                            </div>

                            <Formik
                                // onSubmit={onLoginRequest}
                                initialValues={{ amount: '' }}
                                validationSchema={amountSchema}>
                                {(props) => <AmountForm {...props} />}
                            </Formik>
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

export default TransSearch