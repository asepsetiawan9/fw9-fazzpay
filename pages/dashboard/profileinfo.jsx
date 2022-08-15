import React, { useState, useEffect } from 'react'
import axios from '../../helper/axios'
import Cookies from 'js-cookie';
import NavbarDash from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link';

function ProfileInfo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const user = Cookies.get('id');
            const result = await axios.get(`user/profile/${user}`);
            setData(result.data.data);
            console.log(result);
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
                        <div className='d-flex flex-column transferTo' style={{ background: '#B1D0E0', borderRadius: '20px' }}>
                            <div className="d-flex flex-column" style={{ justifyContent: 'space-between', padding: '30px 25px' }} >
                                <div>
                                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Personal Information</p>
                                </div>
                            </div>
                            <div className="wrapTrasn">
                                <div>
                                    <p style={{ fontSize: '16px' }}>We got your personal information from the sign <br /> up proccess. If you want to make changes on<br /> your information, contact our support.</p>
                                </div>

                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-column" style={{ padding: '20px 0px 0px 20px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '-10px' }}>First Name</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{data.firstName}</p>
                                    </div>
                                </div>

                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-column" style={{ padding: '20px 0px 0px 20px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '-10px' }}>Last Name</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{data.lastName}</p>
                                    </div>
                                </div>

                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-column" style={{ padding: '20px 0px 0px 20px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '-10px' }}>Verified E-mail</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{data.email}</p>
                                    </div>
                                </div>
                                <div className='cardSearchTrans'>
                                    <div className="d-flex flex-column" style={{ padding: '20px 0px 0px 20px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '-10px' }}>Phone Number</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{data.noTelp || "082 ----"}</p>
                                    </div>
                                    <div style={{ paddingTop: '10px', textDecoration: 'none', fontSize: '15px' }}><Link href='/phone'> Manage </Link></div>
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

export default ProfileInfo