import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import NavbarDash from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { Row, Col, Button, Form } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link';
import axios from '../../helper/axios'
//photo
import p1 from '../../public/images/p1.png'
import p2 from '../../public/images/p2.png'
import p3 from '../../public/images/p3.png'

function TransSearch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getDataUser();
    }, []);

    const router = useRouter();

    const getDataUser = async () => {
        try {
            const result = await axios.get(`user?page=1&limit=7&search=&sort=firstName ASC`);
            setData(result.data.data);
        } catch (error) {
            console.log(error);
        }
    };

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
                                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Search Reciver</p>
                                </div>
                                <div>
                                    <Form.Control
                                        className="form-control form-control-lg"
                                        type="text"
                                        placeholder="Search"
                                        aria-label=".form-control-lg example"
                                        style={{
                                            background: '#6998AB',
                                            borderRadius: '12px', border: 'unset', color: '#1A374D'
                                        }} />
                                </div>
                            </div>
                            <div className="wrapTrasn">
                                {data.map((user) => (
                                    <div
                                        key={user.id}
                                        className="cardSearchTrans"
                                        onClick={() => {
                                            Cookies.set('recipientID', user.id);
                                            router.push('/input-tf');
                                        }}
                                    >
                                        <div className="d-flex flex-row gap-4" style={{ padding: '0px 20px' }}>
                                            <Image width={50}
                                                height={50} src={user.image ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${user.image}` : '/images/user.webp'} alt="p1" className='img-fluid' />
                                            <div className="d-flex flex-column">
                                                <p style={{ fontSize: '16px', fontWeight: 'bold' }}> {`${user.firstName} ${user.lastName}`} </p>
                                                <p style={{ fontSize: '14px', marginTop: '-15px' }}>{user.noTelp}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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

export default TransSearch