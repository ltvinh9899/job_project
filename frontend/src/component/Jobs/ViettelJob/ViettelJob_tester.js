import React, { Component } from 'react';
import Logo from "./image/logo.png";
import background_image from "./image/viettel.jpg"
import country from "./image/VN-Vietnam-Flag-icon.png"
import Viettel_logo from "./image/viettel-group-logo.jpg"
import job_Des from "./image/jobDes_Viettel.png"
import skill from "./image/skill_Viettel.png"
import { AiFillHome } from "react-icons/ai"
import { BsPeopleFill } from "react-icons/bs"
import { BsPeopleCircle } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { IoIosPeople } from "react-icons/io"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { FaCity } from "react-icons/fa"
import { GiModernCity } from "react-icons/gi"
import { FaHome } from "react-icons/fa"
import { IoIosCalendar } from "react-icons/io"
//import { BiMap } from "react-icons/bi"
import { AiFillSetting } from "react-icons/ai"
import { BiCalendar, BiMap } from "react-icons/bi"
import { SiGooglemaps } from "react-icons/si"
import { AiFillFlag } from "react-icons/ai"
import Modal from 'react-awesome-modal'
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';
import "./ViettelJob_tester.css"
import Apply from "../Apply"
import Logout from '../Logout'
import axios from "axios";
import cookie from 'react-cookies'
import { FaUserSecret } from "react-icons/fa"
let user;
let account_id;

class ViettelJob_tester extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible_first: false,
            visible_second: false,
            job_detail: [],
            companies: [],
        }
        user = cookie.load("user_name")
        account_id = cookie.load("id_account")
    }

    componentDidMount() {
        const id_job = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/job-detail/${id_job}/`).then(res => {
            const job_detail = res.data;
            this.setState({ job_detail });
            console.log(job_detail);
        })
            .catch(error => {
                console.log(error);
            })

    }
    componentDidMount1() {
        axios.get('http://127.0.0.1:8000/companies-list/').then(res => {
            const companies = res.data;
            this.setState({ companies });
            console.log(companies);
        })
            .catch(error => {
                console.log(error);
            })

    }

    openModal(name_event) {
        if (name_event == "logout") {
            this.setState({
                visible_first: true
            });
        }
        else {
            this.setState({
                visible_second: true
            });
        }

    }
    closeModal(name_event) {
        if (name_event == "logout") {
            this.setState({
                visible_first: false
            });
        }
        else {
            this.setState({
                visible_second: false
            });
        }

    }

    render() {
        return (
            <div class="container">
                <div class="header_container">
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
                                        <BsPeopleCircle class="login_icon" onClick={() =>
                                            this.closeModal("logout")}></BsPeopleCircle>
                                        <span onClick={() => this.openModal("logout")}>Log out</span>
                                        <Modal
                                            visible={this.state.visible_first}
                                            width="300"
                                            height="80"
                                            backgroundColor="red"
                                            effect="fadeInUp"
                                        >
                                            <div class="loginScreen"><Logout parentMethod={() =>
                                                this.closeModal("logout")}></Logout>
                                            </div>
                                        </Modal>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div class="Viettel_tester_main">
                    <div class="Viettel_tester_main_image">
                        <img src={this.state.job_detail.back_ground_company} class="image" />
                    </div>
                    <div class="Viettel_tester_main_content">
                        <div class="Viettel_tester_main_content_logo">
                            <div class="Viettel_tester_main_content_logo_icon">
                                <Link to={`/company/${this.state.job_detail.id_company}`} class="company_frame">
                                    <img src={this.state.job_detail.logo_company}></img>
                                </Link>
                            </div>
                            <div class="Viettel_tester_main_content_logo_infor">
                                <div class="Viettel_tester_main_content_logo_infor_title">
                                    <h1>{this.state.job_detail.name_company}</h1>
                                </div>
                                <div class="Viettel_tester_main_content_logo_infor_introduce">
                                    <ul style={{ marginTop: "20px", marginLeft: "5px" }}>
                                        <li style={{ marginTop: "5px" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <SiGooglemaps class="icon" style={{ color: "blue", marginRight: "20px", fontSize: "20px" }}></SiGooglemaps>
                                                <p >{this.state.job_detail.city}</p>
                                            </div>
                                        </li>
                                        <li style={{ marginTop: "5px" }}>
                                            <div class="country_flag">
                                                <div class="country_flag_icon" style={{ marginTop: "0px", marginLeft: "0px", display: 'flex', alignItems: "center" }}>
                                                    <AiFillFlag class="icon" style={{ fontSize: "25px", color: "green", marginRight: "15px" }}></AiFillFlag>
                                                    <div id="text"><p>{this.state.job_detail.country}</p></div>

                                                </div>
                                            </div>

                                        </li >
                                        <li style={{ marginTop: "5px" }}>
                                            <div style={{ display: 'flex', alignItems: "center" }}>
                                                <BiCalendar class="icon" style={{ color: "black", marginRight: "20px", fontSize: "20px" }}></BiCalendar>
                                                <p>Monday - Saturday</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="Viettel_tester_main_content_title">
                            <div class="Viettel_tester_main_content_title_name">
                                <h1>{this.state.job_detail.name}</h1>
                            </div>
                            <div class="Viettel_tester_main_content_title_frame">
                                <ul>
                                    <li >
                                        <Link to={`/job-list-follow-type/${this.state.job_detail.id_job_type}`} class="company_frame" id="type_frame">
                                            <div>{this.state.job_detail.name_job_type}</div>
                                        </Link>
                                    </li>
                                    <li >
                                        <Link to={`/company/${this.state.job_detail.id_company}`} class="company_frame" id="job_frame">
                                            <div  >{this.state.job_detail.name_company}</div>
                                        </Link>

                                    </li>
                                </ul>
                            </div>
                            <div class="Viettel_tester_main_content_title_description">
                                <ul>
                                    <li class="salary_description">
                                        <div>
                                            <div class="icon"><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
                                            <div class="text"><span>{this.state.job_detail.offer_salary} USD</span></div>
                                        </div>
                                    </li>
                                    <li class="positive_description" style={{ marginTop: "10px" }}>
                                        <div class="icon" style={{ marginLeft: "1px", fontSize: "24px", opacity: 0.8, marginTop: "-2px" }} ><BsPeopleCircle></BsPeopleCircle></div>
                                        <div class="text" style={{ marginTop: "-22px", marginLeft: "35px", fontSize: "17px" }} ><span>{this.state.job_detail.job_position}</span></div>

                                    </li>
                                    <li class="address_description" style={{ marginTop: "15px", marginLeft: "-4px" }}>
                                        <div>
                                            <div class="icon" style={{ fontSize: "32px" }}><BiMap></BiMap></div>
                                            <div class="text"><span>{this.state.job_detail.address}, {this.state.job_detail.districst}, {this.state.job_detail.city}</span></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="Viettel_tester_main_content_title_apply">
                                <div class="apply_button" onClick={() => {
<<<<<<< HEAD
                                    global.value += (this.state.job_detail.id + "_")
                                    cookie.save(account_id, global.value, { path: "/" })
                                    this.openModal("apply")
                                    //  this.openModal("apply")
=======
                                     global.value += (this.state.job_detail.id+"_") 
                                     cookie.save(account_id, global.value, { path: "/" }) 
                                     this.openModal("apply")
                                  //  this.openModal("apply")
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78
                                }}>
                                    <span>Apply Now</span>
                                </div>
                                <Modal
                                    visible={this.state.visible_second}
                                    width="900"
                                    height="350"
                                    backgroundColor="red"
                                    effect="fadeInUp"
                                    onClickAway={() => this.closeModal("apply")}
                                >
                                    <div><Apply parentMethod={() => this.closeModal("apply")} ></Apply></div>
                                </Modal>
                            </div>
                            <div class="Viettel_tester_main_content_title_unique">
                                <div class="skill" style={{ marginLeft: "40px", marginTop: "30px" }}>
                                    <div><h1 style={{ fontSize: "25px" }}>Job Description</h1></div>
                                    <div ><pre style={{ width: "650px", whiteSpace: "pre-wrap", fontSize: "20px", fontFamily: "Helvetica Neue" }}>{this.state.job_detail.description}</pre></div>
                                    <div><h1 style={{ fontSize: "25px" }}>Requirement</h1></div>
                                    <div ><pre style={{ width: "650px", whiteSpace: "pre-wrap", fontSize: "20px", fontFamily: "Helvetica Neue" }}>{this.state.job_detail.requirement}</pre></div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="footer_container">
                    <div class="footer_search" style={{ marginLeft: "140px" }}>
                        <div class="footer_search_skill">
                            <div>Jobs by Skill</div>
                            <ul >
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
                            <ul >
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
export default ViettelJob_tester;