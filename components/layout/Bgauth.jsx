import React from 'react';
import { Image, Navbar, Col } from 'react-bootstrap';
import Link from 'next/link'
import phonelogin from '../../public/images/phonelogin.png';

export default function Bgauth() {
    return (
        <>
            <Col className='parent' md={7} >
                <Navbar>
                    <Link className='navbar-brand titleapp' href='/home'>ART-TOS</Link>
                </Navbar>
                <div className="d-flex flex-column align-items-center">
                    <div>
                        {/* <Image src={phonelogin} alt="phonelogin" /> */}
                    </div>
                    <div >
                        <h1>App that Covering Banking Needs</h1>
                        <p>Zwallet is an application that focussing in banking needs for all users
                            in the world. Always updated and always following world trends.
                            5000+ users registered in Zwallet everyday with worldwide
                            users coverage.</p>
                    </div>
                </div>
            </Col>
        </>
    )
}