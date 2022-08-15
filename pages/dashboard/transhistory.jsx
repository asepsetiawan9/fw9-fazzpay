import React, { useState, useEffect } from 'react'
import NavbarDash from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import axios from '../../helper/axios'
import Cookies from 'js-cookie';
//photo
import p1 from '../../public/images/p1.png'

function TransHistory() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const result = await axios.get(`/transaction/history?page=1&limit=10`);
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
                        <div className='d-flex flex-column gap-4' style={{ background: '#B1D0E0', borderRadius: '20px' }}>
                            <div className="d-flex flex-column" style={{ justifyContent: 'space-between', padding: '30px 25px' }} >
                                <div>
                                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Transaction History</p>
                                </div>
                            </div>
                            <div className="wrapTrasn">
                                <div>
                                    <p style={{ fontSize: '16px', color: '#406882' }}>This Week</p>
                                </div>
                                <>
                                    {data.map((user) => (
                                        <div key={user.id} className="d-flex flex-row" style={{ justifyContent: 'space-between' }}>
                                            <div className="d-flex flex-row gap-4">
                                                <Image width={50}
                                                    height={30} src={user.image ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${user.image}` : '/images/user.webp'} alt="p1" className='img-fluid' />
                                                <div className="d-flex flex-column">
                                                    <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{user.fullName}</p>
                                                    <p style={{ fontSize: '14px', marginTop: '-15px' }}>{user.type}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row " style={{ justifyContent: 'flex-end' }}>
                                                <div >

                                                    {/* <p style={{ paddingRight: '30px', color: 'red' }}>-Rp{amount}</p> : */}
                                                    <p style={{ paddingRight: '30px', color: 'green' }}>+Rp {user.amount}</p>

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            </div>
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

export default TransHistory