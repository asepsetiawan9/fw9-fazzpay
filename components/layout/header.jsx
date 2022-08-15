import React, { useState, useEffect } from 'react'
import axios from '../../helper/axios'
import Cookies from 'js-cookie';
import user from '../../public/images/u3.png'
import Image from 'next/image'
import Link from 'next/link';
import { Navbar, Dropdown, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import logout from '../../stores/actions/auth';

//icon
import { FiBell, FiGrid, FiLogOut, FiPlus, FiUser, FiArrowDown, FiArrowUp, FiMenu } from "react-icons/fi";


function Header() {

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
            <Navbar className='Navbar'>
                <div className='titleapp'>
                    <Link href='/dashboard'>ART-TOS</Link>
                </div>
                <div className="navWrap">
                    <Image width={50}
                        height={50} src={data.image ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${data.image}` : '/images/user.webp'} alt="p1" className='img-fluid' />
                    <div className="dashUser">
                        <p className="userDashName">{`${data.firstName} ${data.lastName} ` || "Name User"}</p>
                        <p style={{ fontSize: '16px', color: '#406882' }}>{data.noTelp || "082 ----"}</p>
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
