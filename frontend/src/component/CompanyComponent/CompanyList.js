import React, { Component } from 'react'
import { AiFillHome } from "react-icons/ai"
import { BsPeopleFill } from "react-icons/bs"
import { BsPeopleCircle } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { IoIosPeople } from "react-icons/io"
import { FaQuoteLeft } from "react-icons/fa"
import { FaQuoteRight } from "react-icons/fa"

import Modal from 'react-awesome-modal'
import Logo from "../image/logo.png";
import Logo_company from "../image/best_company.png";
import Star from "../image/star.png";
import viettel from "./image/Logo_Viettel.png"
import "./CompanyList.css"
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom'
import Logout from '../Logout'
import axios from "axios";
import cookie from 'react-cookies'
import { FaUserSecret } from "react-icons/fa"
let user;
class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            currentComponent: 'A',
            companies: [],
        }
        user = cookie.load("user_name")

    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/companies-list/').then(res => {
            // handle success
            const companies = res.data;
            this.setState({ companies });
            console.log(companies);
        })
            .catch(error => {
                // handle error
                console.log(error);
            })

    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div class="container_company">
                <div class="header_container">
                    <div class="header">
                        <div class="header_left">
                            <Link to="/Welcome"><img src={Logo} /></Link>
                            <span style={{ color: "white" }}>IT JOB FOR EVERYONE </span>
                        </div>
                        <div class="header_right">
                            <ul>
                                <li class="job">
                                    <Link to="/job-list" class="text-link" style={{ textDecoration: 'none', color: 'white' }}>
                                        <div >
                                            <BsPeopleFill class="job_icon"></BsPeopleFill>
                                            <span>Job</span>
                                        </div>
                                    </Link>
                                </li>
                                <li class="company">
                                    <Link to="/Company_List" class="text-link" style={{ textDecoration: 'none', color: 'white' }} >
                                        <div>
                                            <AiFillHome class="company_icon"></AiFillHome>
                                            <span >Company</span>
                                        </div>
                                    </Link>
                                </li>
                                <li class="user_cookies">
                                    <div class="text-link" style={{ textDecoration: 'none', color: 'white' }} >
                                        <div>
                                            <FaUserSecret class="company_icon" style={{ fontSize: "25px" }}></FaUserSecret>
                                            <span >{user}</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="login">
                                    <div>
                                        <BsPeopleCircle class="login_icon" onClick={() => this.openModal()}></BsPeopleCircle>
                                        <span onClick={() => this.openModal()}>Log out</span>
                                        <Modal
                                            visible={this.state.visible}
                                            width="300"
                                            height="80"
                                            backgroundColor="red"
                                            effect="fadeInUp"


                                        >
                                            <div class="loginScreen">
                                                <Logout parentMethod={() => this.closeModal()}></Logout>
                                            </div>
                                        </Modal>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="header_search">
                        <input type="text" style={{ paddingLeft: "40px" }} placeholder="Key word for finding job" id="search_input_text" onkeyup="search_animal()" onKeyDown={(event) => {
                            if (event.key == "Enter") {
                                this.setState({
                                    key_value: document.getElementById("search_input_text").value,
                                })
                            }
                        }
                        }></input>
                        <div class="search_icon"><BsSearch></BsSearch></div>
                        <div class="search_button" onClick={() => {
                            this.setState({
                                key_value: document.getElementById("search_input_text").value,
                            })
                        }
                        }>
                            <span >Search</span>
                        </div>
                    </div>
                    <div class="header_search_skill">
                        <ul>

                            <li><Link to="/job-list-follow-type/1" className='text-link'  ><div>Tester</div></Link></li>
                            <li><Link to="/job-list-follow-type/2" className='text-link'  ><div>JavaScript</div></Link></li>
                            <li><Link to="/job-list-follow-type/3" className='text-link'  ><div>C/C++</div></Link></li>
                            <li><Link to="/job-list-follow-type/5" className='text-link'  ><div>.NET</div></Link></li>
                            <li><Link to="/job-list-follow-type/6" className='text-link'  ><div>PHP</div></Link></li>
                            <li><Link to="/job-list-follow-type/4" className='text-link'  ><div>Java</div></Link></li>
                        </ul>
                    </div>
                </div>
                <div class="main_company_list">
                    <div class="introduce_main_company">
                        <div class="content_main_company">
                            <h1>Vietnam Best IT Companies 2019</h1>
                            <p>The employees have spoken! Here are the Top Vietnam Best IT Companies 2019 to work for based on 11,000+ reviews submitted by IT people.</p>
                        </div>
                        <div class="logo_main_company">
                            <div class="logo_best_company">
                                <img src={Logo_company} />

                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div class="list_main_company">
                        <ul>
                            {this.state.companies.map(company => {
                                return (
                                    <Link to={`/company/${company.id}`} class="Viettel_link">
                                        <li key={company.id}>
                                            <div class="name_list_company">
                                                <h2 style={{ textAlign: "center" }}>{company.name_company}</h2>
                                            </div>
                                            <div class="other_introduce">
                                                <div class="frame_logo"><img style={{ width: "160px", height: "130px" }} src={company.logo_company} /></div>
                                                <div class="comment_company">
                                                    <div class="comment_company_icons">
                                                        <div><FaQuoteLeft></FaQuoteLeft></div>
                                                        <span>{company.description_company}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </Link>
                                );

                            })}

                        </ul>
                    </div>
                </div>
                <div class="footer_container">
                    <div class="footer_search" style={{marginLeft:"140px"}}>
                        <div class="footer_search_skill">
                            <div>Jobs by Skill</div>
                            <ul>
                                <li><Link to="/job-list-follow-type/2" style={{ textDecoration: "none", color: "white" }}><div style={{ fontSize: "18px" }}>JavaScript</div></Link></li>
                                <li><Link to="/job-list-follow-type/1" style={{ textDecoration: "none", color: "white" }}><div style={{ fontSize: "18px" }}>Tester</div></Link></li>
                                <li><Link to="/job-list-follow-type/3" style={{ textDecoration: "none", color: "white" }}><div style={{ fontSize: "18px" }}>C/C++</div></Link></li>
                                <li><Link to="/job-list-follow-type/5" style={{ textDecoration: "none", color: "white" }}><div style={{ fontSize: "18px" }}>.NET</div></Link></li>
                                <li><Link to="/job-list-follow-type/6" style={{ textDecoration: "none", color: "white" }}><div style={{ fontSize: "18px" }}>PHP</div></Link></li>
                                <li><Link to="/job-list-follow-type/4" style={{ textDecoration: "none", color: "white" }}><div style={{ fontSize: "18px" }}>Java</div></Link></li>

                            </ul>
                        </div>
                        <div class="footer_search_position">
                            <div>Jobs by Position</div>
                            <ul>
                                <li><a><Link to="/job-list-follow-position/1" className='text-link-footer'>Internship</Link></a></li>
                                <li><a><Link to="/job-list-follow-position/5" className='text-link-footer'>Fresher</Link></a></li>
                                <li><a><Link to="/job-list-follow-position/3" className='text-link-footer'>Junior</Link></a></li>
                                <li><a><Link to="/job-list-follow-position/4" className='text-link-footer'>Freelancer</Link></a></li>
                                <li><a><Link to="/job-list-follow-position/2" className='text-link-footer'>Senior</Link></a></li>
                            </ul>
                        </div>
                        <div class="footer_search_company">
                            <div>Jobs by Company</div>
                            <ul>
                                <li><Link to="/company/8" class="link_company">Toshiba Software</Link></li>
                                <li><Link to="/company/9" class="link_company">VNG Corporation</Link></li>
                                <li><Link to="/company/2" class="link_company">FPT Software</Link></li>
                                <li><Link to="/company/7" class="link_company">Sun* Inc</Link></li>
                                <li><Link to="/company/1" class="link_company">Viettel Group</Link></li>
                                <li><Link to="/company/3" class="link_company">HyBrid Technology</Link></li>
                                <li><Link to="/company/4" class="link_company">KMS Technology</Link></li>
                                <li><Link to="/company/5" class="link_company">LG Việt Nam</Link></li>
                                <li><Link to="/company/6" class="link_company">Misa Software</Link></li>
                                <li><Link to="/company/10" class="link_company">VNPT Technology</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default CompanyList;