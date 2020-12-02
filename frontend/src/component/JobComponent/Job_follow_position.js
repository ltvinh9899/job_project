import React, { Component } from 'react';
import Logo from "../image/logo.png";
import { AiFillHome } from "react-icons/ai"
import { BsPeopleFill } from "react-icons/bs"
import { BsPeopleCircle } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { IoIosPeople } from "react-icons/io"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { FaCity } from "react-icons/fa"
import { GiModernCity } from "react-icons/gi"
import { FaHome } from "react-icons/fa"
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';
import Logout from '../Logout'
import Modal from 'react-awesome-modal'
import "./Java.css"
import axios from "axios";
import cookie from 'react-cookies'
import { FaUserSecret } from "react-icons/fa"
let user;

class Java extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            currentComponent: 'A',
            java_jobs: [],
            job_position: [],
        }
        user = cookie.load("user_name")

    }

    componentDidMount() {
        const id_job_position = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/job-list-follow-position/${id_job_position}/`).then(res => {
            // handle success
            const java_jobs = res.data;
            this.setState({ java_jobs });
            console.log(java_jobs);
        })
            .catch(error => {
                // handle error
                console.log(error);
            })

        axios.get(`http://127.0.0.1:8000/job-position/${id_job_position}/`).then(res => {
            // handle success
            const job_position = res.data;
            this.setState({ job_position });
            console.log(job_position);
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
            <div class="container">
                <div class="header_company_list">
                    <div class="header_company_left">
                        <Link to="/Welcome"><img src={Logo} /></Link>
                        <span>IT JOB FOR EVERYONE</span>
                    </div>
                    <div class="header_company_right">
                        <ul>

                            <li class="job">
                                <Link to="/job-list" class="text-link" style={{ textDecoration: 'none', color: 'white' }}>
                                    <div>
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
                <div class="header_search_job">
                    <div class="header_search">
                        <input type="text" placeholder="Key word for finding job"></input>
                        <div class="search_icon"><BsSearch></BsSearch></div>
                        <div class="search_button">
                            <span>Search</span>
                        </div>
                    </div>
                </div>
                <div class="main_container_java">

                    <div class="numberJob">
                        <span>{this.state.job_position.name_location}</span>
                    </div>
                    <ul style={{ listStyle: "none", marginLeft: "-40px", paddingBottom: "20px" }}>
                        {this.state.java_jobs.map(java_job => {
                            return (

                                <Link to={`/job-detail/${java_job.id}`} class="Viettel_link">
                                    <li key={java_job.id}>
                                        <div class="Job">
                                            <div class="descriptionJob">
                                                <div class="SpecificallyJob">
                                                    <div class="logoCompany">
                                                        <div><img src={java_job.logo_company} /></div>
                                                    </div>
                                                    <div class="contentJob" style={{ marginLeft: "30px", marginTop: "60px" }}>
                                                        <div class="nameJob">{java_job.name}</div>
                                                        <div class="salaryJob">
                                                            <div class="iconJob"><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
                                                            <span>{java_job.offer_salary}  USD</span>
                                                            <div class="iconJob" style={{ marginLeft: "20px", fontSize: "22px" }}><BsPeopleCircle></BsPeopleCircle></div>
                                                            <span style={{ fontSize: "18px", marginLeft: "5px" }}>{java_job.job_position}</span>
                                                        </div>
                                                        <div class="priorityJob">
                                                            {/* {java_job.description} */}
                                                        </div>
                                                    </div>
                                                    <div class="PlaceJob" style={{ marginTop: "10px", marginRight: "20px", width: "540px" }}>
                                                        <div class="city">
                                                            <div class="icon">
                                                                <FaCity ></FaCity>
                                                            </div>
                                                            <span>{java_job.city}</span>

                                                        </div>
                                                        <div class="distric">
                                                            <div class="icon">
                                                                <GiModernCity ></GiModernCity>
                                                            </div>
                                                            <span>{java_job.districst}</span>
                                                        </div>
                                                        <div class="address">
                                                            <div class="icon">
                                                                <FaHome></FaHome>
                                                            </div>
                                                            <span>{java_job.address}</span>
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
export default Java;