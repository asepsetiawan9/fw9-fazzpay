import React from 'react'
import user from '../../public/images/u3.png'
import Image from 'next/image'
import Link from 'next/link';
import { Navbar, Dropdown, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import logout from '../../stores/actions/auth';

//icon
import { FiBell, FiGrid, FiLogOut, FiPlus, FiUser, FiArrowDown, FiArrowUp, FiMenu } from "react-icons/fi";


function Header() {

    // const dispatch = useDispatch();

    // const onLogout = () => {
    //     dispatch(logout());
    //     navigate("/login");
    // };

    // const token = useSelector((state) => state.auth.token)
    // const profile = useSelector((state) => state.profile.data);
    // const dataUser = useSelector((state) => state.profile.data);

    // React.useEffect(() => {
    //     dispatch(getProfile(token))
    // }, [])
    // console.log(profile?.result);

    return (
        <>
            <Navbar className='Navbar'>
                <div className='titleapp'>
                    <Link href='/dashboard'>ART-TOS</Link>
                </div>
                <div className="navWrap">
                    <Image style={{ height: '60px' }} src={user} alt="user" />
                    <div className="dashUser">
                        <p className="userDashName">Namaaaa</p>
                        <p style={{ fontSize: '16px', color: '#406882' }}>+62 8139 3877 7946</p>
                    </div>
                    <div>
                        <div>
                            <Dropdown className="custom_nav_link">
                                <Dropdown.Toggle className='dropdownIcon' id="dropdown-menu-align-start" align="start" title="Dropdown start">
                                    <FiBell size={30} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* <Col md={5}> */}
                                    <div className="notifDropdown" >
                                        <div>
                                            <p className="notifDay">Today</p>
                                        </div>

                                        <div className="d-flex flex-row gap-3">
                                            <div><FiArrowDown style={{ color: 'green' }} /></div>
                                            <div>
                                                <div><p>Transfered from Joshua Lee</p></div>
                                                <div><p>Rp220.000</p></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row gap-3" >
                                            <div><FiArrowUp style={{ color: 'red' }} /></div>
                                            <div>
                                                <div><p>Netflix subscription</p></div>
                                                <div><p>Rp220.000</p></div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='notifDay'>This Week</p>
                                        </div>

                                        <div className="d-flex flex-row gap-3">
                                            <div><FiArrowDown style={{ color: 'green' }} /></div>
                                            <div>
                                                <div><p>Transfered from Joshua Lee</p></div>
                                                <div><p>Rp220.000</p></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row gap-3" >
                                            <div><FiArrowUp style={{ color: 'red' }} /></div>
                                            <div>
                                                <div><p>Netflix subscription</p></div>
                                                <div><p>Rp220.000</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </Col> */}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div>
                            <Dropdown className='dropDownMenuMobile'>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <FiMenu />
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <div className='menuDropDown'>
                                        <Dropdown.Item href="/dashboard"><FiGrid /> Dashboard</Dropdown.Item>
                                        <Dropdown.Item href="/transsearch"><FiArrowUp /> Transfer</Dropdown.Item>
                                        <Dropdown.Item href="/topup"><FiPlus /> Top Up</Dropdown.Item>
                                        <Dropdown.Item href="/profile"><FiUser /> Profile</Dropdown.Item>
                                        <Dropdown.Item href="/login"><FiLogOut /> Logout</Dropdown.Item >
                                    </div>
                                </Dropdown.Menu>

                            </Dropdown>
                        </div>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default Header
