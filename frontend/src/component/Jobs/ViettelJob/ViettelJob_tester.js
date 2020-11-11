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
import { BiMap } from "react-icons/bi"
import { AiFillSetting } from "react-icons/ai"
import Modal from 'react-awesome-modal'
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';
import "./ViettelJob_tester.css"
import Apply from "../Apply"
import Logout from '../Logout'
import axios from "axios";

class ViettelJob_tester extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible_first: false,
            visible_second: false,
            job_detail: []
        }
    }

    componentDidMount() {
        const id_job = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/job-detail/${id_job}/`).then(res => {
            // handle success
            const job_detail = res.data;
            this.setState({ job_detail });
            console.log(job_detail);
          })
          .catch( error => {
            // handle error
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
                <div class="header_company_list">
                    <div class="header_company_left">

                        <img src={Logo} />
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
                            <li class="login">
                                <div>
                                    <BsPeopleCircle class="login_icon" onClick={() => this.openModal()}></BsPeopleCircle>
                                    <span onClick={() => this.openModal("logout")}>Log out</span>
                                    <Modal
                                        visible={this.state.visible_first}
                                        width="300"
                                        height="80"
                                        backgroundColor="red"
                                        effect="fadeInUp"

                                    >
                                        <div class="loginScreen">
                                            <Logout parentMethod={() => this.closeModal("logout")}></Logout>
                                        </div>
                                    </Modal>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="Viettel_tester_main">
                    <div class="Viettel_tester_main_image">
                        <img src={this.state.job_detail.back_ground_company} class="image" />
                    </div>
                    <div class="Viettel_tester_main_content">
                        <div class="Viettel_tester_main_content_logo">
                            <div class="Viettel_tester_main_content_logo_icon">
                                <Link to="/Viettel" class="company_frame">
                                    <img src={this.state.job_detail.logo_company}></img>
                                </Link>
                            </div>
                            <div class="Viettel_tester_main_content_logo_infor">
                                <div class="Viettel_tester_main_content_logo_infor_title">
                                    <h1>Viettel Group</h1>
                                </div>
                                <div class="Viettel_tester_main_content_logo_infor_introduce">
                                    <ul>
                                        <li class="country">
                                            <div>
                                                <img src={country}></img>
                                                <div class="country_name"><span>{this.state.job_detail.country}</span></div>
                                            </div>
                                        </li>
                                        {/* <li class="staff">
                                            <div>
                                                <AiFillSetting class="staff_number"></AiFillSetting>
                                                <div class="staff_name"><span>Product</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="schedule">
                                                <IoIosCalendar class="schedule_number"></IoIosCalendar>
                                                <div class="schedule_name"><span>Monday - Friday</span></div>
                                            </div>
                                        </li> */}
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
                                        <Link to="/Company_List" class="company_frame">
                                            <div>{this.state.job_detail.name_job_type}</div>
                                        </Link>
                                    </li>
                                    <li >
                                        <Link to="/Company_List" class="company_frame">
                                            <div>{this.state.job_detail.name_company}</div>
                                        </Link>

                                    </li>
                                </ul>
                            </div>
                            <div class="Viettel_tester_main_content_title_description">
                                <ul>
                                    <li class="salary_description">
                                        <div >
                                            <div class="icon"><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
                                            <div class="text"><span>{this.state.job_detail.offer_salary} USD</span></div>
                                        </div>
                                    </li>
                                    <li class="positive_description" style={{ marginTop: "10px" }}>
                                        <div class="icon" style={{ marginLeft: "1px", fontSize: "24px", opacity: 0.8, marginTop: "-2px" }} ><BsPeopleCircle></BsPeopleCircle></div>
                                        <div class="text" style={{ marginTop: "-22px", marginLeft: "35px", fontSize: "17px" }} ><span>Senior</span></div>
                                        {/* <span style={{ fontSize: "19px", marginLeft: "5px", marginTop: "5px" }}>Senior</span> */}
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
                                <div class="apply_button" onClick={() => this.openModal("apply")}>
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
                                <div class="skill">
                                    <div ><pre style={{fontSize:'20px', marginLeft:'50px',fontFamily: "Helvetica Neue", marginTop:"30px"}}>{this.state.job_detail.description}</pre></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}
export default ViettelJob_tester;