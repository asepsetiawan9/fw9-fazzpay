import React, { useState, useEffect } from 'react'
import axios from '../../helper/axios'
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { Button, Col } from 'react-bootstrap'
import logout from '../../stores/actions/auth';
import Link from 'next/link';


//icon
import { FiGrid, FiUser, FiArrowUp, FiPlus, FiLogOut } from "react-icons/fi";


function MenuBar() {

    return (
        <>
            <Col md={3} className='sideBar'>
                <div className="sideBarMenu">
                    <div className="itemMenu">
                        <FiGrid />
                        <Link style={{ textDecoration: 'none', color: '#3A3D42CC' }} href='/home'>Dashboard</Link>
                    </div>
                    <div className="itemMenu">
                        <FiArrowUp />
                        <Link style={{ textDecoration: 'none', color: '#3A3D42CC' }} href='/search-tf'>Transfer</Link>
                    </div>
                    <div className="itemMenu">
                        <FiPlus />
                        <Link style={{ textDecoration: 'none', color: '#3A3D42CC' }} href='/topup'>Top Up</Link>
                    </div>
                    <div className="itemMenu">
                        <FiUser />
                        <Link style={{ textDecoration: 'none', color: '#3A3D42CC' }} href='/profile'>Profile</Link>
                    </div>
                </div>

                <div className="itemMenu d-flex" style={{ paddingBottom: '30px', justifyContent: 'flex-start' }}>
                    <FiLogOut />
                    <Button style={{ textDecoration: 'none', color: '#3A3D42CC', background: 'none', border: 'none' }}>Logout</Button>
                </div>
            </Col>
        </>
    )
}

export default MenuBar
