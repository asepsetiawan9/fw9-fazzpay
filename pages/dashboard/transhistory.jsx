import React from 'react'
import NavbarDash from '../../components/layout/menubar'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'
//photo
import p1 from '../../public/images/p1.png'

function DataHistoryTrans({ sender_id, name, phone, amount }) {
    return (
        <div className="d-flex flex-row" style={{ justifyContent: 'space-between' }}>
            <div className="d-flex flex-row gap-4">
                <Image style={{ width: '50px', height: '50px' }} src={p1} alt={p1} />
                <div className="d-flex flex-column">
                    <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{name}</p>
                    <p style={{ fontSize: '14px', marginTop: '-15px' }}>{phone}</p>
                </div>
            </div>
            <div className="d-flex flex-row " style={{ justifyContent: 'flex-end' }}>
                <div >
                    {sender_id ?
                        <p style={{ paddingRight: '30px', color: 'red' }}>-Rp{amount}</p> :
                        <p style={{ paddingRight: '30px', color: 'green' }}>+Rp{amount}</p>
                    }
                </div>
            </div>
        </div>
    )
}

function TransHistory() {
    const [data] = React.useState({
        success: true,
        massage: 'List User',
        results: [
            {
                "id": 1,
                "name": "Zepsi",
                "phone": "082216115722",
                "amount": "100000",
                "sender_id": null
            },
            {
                "id": 2,
                "name": "ica",
                "phone": "0822112331",
                "amount": "500000",
                "sender_id": null
            },
            {
                "id": 3,
                "name": "sri",
                "phone": "0892316312",
                "amount": "5000000",
                "sender_id": 1
            },
            {
                "id": 4,
                "name": "Marisa",
                "phone": "0892312112",
                "amount": "1000000",
                "sender_id": 2
            }
        ]
    })
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

                                {data.results.map(o => {
                                    return (
                                        <React.Fragment key={o.id}>
                                            <DataHistoryTrans sender_id={o.sender_id} name={o.name} phone={o.phone} amount={o.amount} />
                                        </React.Fragment>
                                    )
                                })}


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