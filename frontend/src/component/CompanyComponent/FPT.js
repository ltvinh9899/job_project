import React, { Component } from 'react';
import Logo from "./image/logo.png";
import background_image from "./image/viettel.jpg"
import country from "./image/VN-Vietnam-Flag-icon.png"
import Viettel_logo from "./image/viettel-group-logo.jpg"
import logo_viettel from "./image/Logo_Viettel.png"

import Viettel_content from "./image/Viettel_content.png"


import { AiFillHome } from "react-icons/ai"
import { AiFillFlag } from "react-icons/ai"
import { BsPeopleFill } from "react-icons/bs"
import { BsPeopleCircle } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { IoIosPeople } from "react-icons/io"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { FaCity } from "react-icons/fa"
import { GiModernCity } from "react-icons/gi"
import { FaHome } from "react-icons/fa"
import { IoIosCalendar } from "react-icons/io"
import { BiCalendar, BiMap } from "react-icons/bi"
import { SiGooglemaps } from "react-icons/si"
import { AiFillSetting } from "react-icons/ai"
import Logout from '../Logout'
import Modal from 'react-awesome-modal'
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';
import "./Viettel.css"
import axios from "axios";
import cookie from 'react-cookies'
import { FaUserSecret } from "react-icons/fa"
let user;
class FPT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            currentComponent: 'A',
            company_detail: [],
            jobs_list: []
        }
        user = cookie.load("user_name")

    }

    componentDidMount() {
        const id_company = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/company-detail/${id_company}`).then(res => {
            // handle success
            const company_detail = res.data;
            this.setState({ company_detail });
            console.log(company_detail);
        })
            .catch(error => {
                // handle error
                console.log(error);
            })

        axios.get(`http://127.0.0.1:8000/job-list-follow-company/${id_company}/`).then(res => {
            // handle success
            const jobs_list = res.data;
            this.setState({ jobs_list });
            console.log(jobs_list);
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
            <div class="viettel_container">
                <div class="header_company_list">
                    <div class="header_company_left">
                        <Link to="/Welcome"><img src={Logo} /></Link>
                        <span>IT JOB FOR EVERYONE</span>
                    </div>
                    <div class="header_company_right">
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
                                <Link to="/applied" style={{ textDecoration: 'none', color: 'white' }}>
                                    <div>
                                        <FaUserSecret class="company_icon" style={{ fontSize: "25px" }} ></FaUserSecret>
                                        <span >{user}</span>
                                    </div>
                                </Link>
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
                <div class="viettel_company_main">
                    <div class="Viettel_tester_main_image">
                        <img src={this.state.company_detail.back_ground_company} />
                    </div>
                    <div class=" Viettel_company_main_content">
                        <div class="Viettel_company_main_content_header">
                            <div>
                                <img src={this.state.company_detail.logo_company} />
                            </div>
                            <div class="Viettel_company_name">
                                <p >{this.state.company_detail.name_company}</p>
                                <div class="Viettel_company_icon">
                                    <ul>
                                        <li>
                                            <div>
                                                <SiGooglemaps class="icon" style={{ color: "blue" }}></SiGooglemaps>
                                                <p>{this.state.company_detail.address},{this.state.company_detail.city}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="country_flag">
                                                <div class="country_flag_icon" style={{ marginTop: "0px", marginLeft: "0px" }}>
                                                    <AiFillFlag class="icon" style={{ fontSize: "25px", color: "green" }}></AiFillFlag>
                                                    <div id="text"><p>{this.state.company_detail.country}</p></div>

                                                </div>
                                            </div>

                                        </li>
                                        <li>

                                            <div>
                                                <BiCalendar class="icon" style={{ color: "black" }}></BiCalendar>
                                                <p>Monday - Saturday</p>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Viettel_company_main_content_intro" >
                        <p style={{ paddingTop: "40px" }}>Giới thiệu về {this.state.company_detail.name_company}</p>
                        <div class="content" id="first_content">
                            {this.state.company_detail.description_company}
                        </div>

                    </div>
                    <div class="Viettel_company_main_content_choice">
                        <div class="Job_title">Jobs</div>
                        <ul style={{ listStyle: "none", marginLeft: "-40px", paddingBottom: "20px" }}>
                            {this.state.jobs_list.map(job => {
                                return (
                                    <Link to={`/job-detail/${job.id}`} class="Viettel_link">
                                        <li key={job.id}>
                                            <div class="Job">
                                                <div class="descriptionJob">
                                                    <div class="SpecificallyJob">
                                                        <div class="logoCompany">
                                                            <div><img src={job.logo_company} /></div>
                                                        </div>
                                                        <div class="contentJob" style={{ marginLeft: "30px", marginTop: "60px" }}>
                                                            <div class="nameJob">{job.name}</div>
                                                            <div class="salaryJob">
                                                                <div class="iconJob"><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
                                                                <span>{job.offer_salary}  USD</span>
                                                                <div class="iconJob" style={{ marginLeft: "20px", fontSize: "22px" }}><BsPeopleCircle></BsPeopleCircle></div>
                                                                <span style={{ fontSize: "18px", marginLeft: "5px" }}>{job.job_position}</span>
                                                            </div>
                                                            <div class="priorityJob">
                                                                {/* {job.description} */}
                                                            </div>
                                                        </div>
                                                        <div class="PlaceJob" style={{ marginTop: "10px", marginRight: "20px", width: "540px" }}>
                                                            <div class="city">
                                                                <div class="icon">
                                                                    <FaCity ></FaCity>
                                                                </div>
                                                                <span>{job.city}</span>

                                                            </div>
                                                            <div class="distric">
                                                                <div class="icon">
                                                                    <GiModernCity ></GiModernCity>
                                                                </div>
                                                                <span>{job.districst}</span>
                                                            </div>
                                                            <div class="address">
                                                                <div class="icon">
                                                                    <FaHome></FaHome>
                                                                </div>
                                                                <span>{job.address}</span>
                                                            </div>
                                                        </div>
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
                    <div class="footer_search" style={{ marginLeft: "140px" }}>
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
            </div>
        )
    }

}
export default FPT;