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
            jobs: [],
            searching_text: '',
        }
        user = cookie.load("user_name")

    }

    componentDidMount() {

        axios.get(`http://127.0.0.1:8000/job-list/`).then(res => {
            // handle success
            const jobs = res.data;
            this.setState({ jobs });
            console.log(jobs);
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

    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();

                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    handleSearching = event => {
        this.setState({
            searching_text: event.target.value

        });
    }

    handleSearchingClick = event => {
        event.preventDefault();

        var csrftoken = this.getCookie('csrftoken')

        const searching = {};
        // this.state.user_email = "none";
        searching.searching_text = this.state.searching_text;


        axios.post('http://127.0.0.1:8000/job-list-follow-searching/', searching, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
            .then(res => {
                const jobs = res.data;
                console.log(jobs)
                this.setState({ jobs });
            }).catch((error) => {
                console.log(error)
            });
    }
    a = () => {
        if (document.getElementsByClassName("log")[0] != "")
            window.location = "/Welcome";
        global.value00000 = "ric";
    }

    render() {
        return (
            <div class="container">
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
                    <div class="header_search">
                        <input type="text" style={{ paddingLeft: "40px" }} name="searching_text" onChange={this.handleSearching} placeholder="Key word for finding job" id="search_input_text" onkeyup="search_animal()" onKeyDown={(event) => {
                            if (event.key == "Enter") {
                                this.setState({
                                    key_value: document.getElementById("search_input_text").value,
                                })
                            }
                        }
                        }></input>
                        <div class="search_icon"><BsSearch></BsSearch></div>
                        <div class="search_button" onClick={this.handleSearchingClick}>
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
                <div class="main_container_java" style={{ height: "auto", marginTop: "65px" }}>

                    <div class="numberJob">
                        <span>Jobs</span>
                    </div>
                    <ul style={{ listStyle: "none", marginLeft: "-40px", paddingBottom: "20px" }}>
                        {this.state.jobs.map(job => {
                            return (
                                <Link to={`/job-detail/${job.id}`} class="Viettel_link">
                                    <li key={job.id}>
                                        <div class="Job">
                                            <div class="descriptionJob">
                                                <div class="SpecificallyJob">
                                                    <div class="logoCompany">
                                                        <div><img src={job.logo_company} /></div>
                                                    </div>
                                                    <div class="contentJob" style={{ marginLeft: "30px" }}>
                                                        <div class="nameJob" style={{ marginTop: "60px" }}>{job.name}</div>
                                                        <div class="salaryJob">
                                                            <div class="iconJob"><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
                                                            <span>{job.offer_salary}  USD</span>
                                                            <div class="iconJob" style={{ marginLeft: "20px", fontSize: "22px" }}><BsPeopleCircle></BsPeopleCircle></div>
                                                            <span style={{ fontSize: "18px", marginLeft: "5px" }}>{job.job_position}</span>
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
                <div class="footer_container">
                    <div class="footer_search" style={{ marginLeft: "140px" }}>
                        <div class="footer_search_skill">
                            <div>Jobs by Skill</div>
                            <ul style={{ textAlign: "center" }}>
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
                            <ul style={{ textAlign: "center" }}>
                                <li><a><Link to="/job-list-follow-position/1" className='text-link-footer'>Internship</Link></a></li>
                                <li><a><Link to="/job-list-follow-position/5" className='text-link-footer'>Fresher</Link></a></li>
                                <li><a><Link to="/job-list-follow-position/3" className='text-link-footer'>Junior</Link></a></li>
                                <li><a><Link to="/job-list-follow-position/4" className='text-link-footer'>Freelancer</Link></a></li>
                                <li><a><Link to="/job-list-follow-position/2" className='text-link-footer'>Senior</Link></a></li>
                            </ul>
                        </div>
                        <div class="footer_search_company">
                            <div>Jobs by Company</div>
                            <ul style={{ textAlign: "center" }}>
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