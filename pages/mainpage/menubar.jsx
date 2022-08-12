import React from 'react'
import { useDispatch } from "react-redux";
import { Button, Col } from 'react-bootstrap'
import logout from '../../stores/actions/auth';
import Link from 'next/link';

//icon
import { FiGrid, FiUser, FiArrowUp, FiPlus, FiLogOut } from "react-icons/fi";


function MenuBar() {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const onLogout = () => {
    //     dispatch(logout());
    //     navigate("/login");
    // };
    return (
        <>
            <Col md={3} className='sideBar'>
                <div className="sideBarMenu">
                    <div className="itemMenu">
                        <FiGrid />
                        <Link style={{ textDecoration: 'none', color: '#3A3D42CC' }} href='/dashboard'>Dashboard</Link>
                    </div>
                    <div className="itemMenu">
                        <FiArrowUp />
                        <Link style={{ textDecoration: 'none', color: '#3A3D42CC' }} href='/transsearch'>Transfer</Link>
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
