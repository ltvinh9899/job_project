import { render } from '@testing-library/react';
import React, { Component } from 'react'
import cookie from 'react-cookies'
import Logo from "./image/logo.png";
import { AiFillHome } from "react-icons/ai"
import { BsPeopleFill } from "react-icons/bs"
import { BsPeopleCircle } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { IoIosPeople } from "react-icons/io"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { FaCity } from "react-icons/fa"
import { GiModernCity } from "react-icons/gi"
import { FaHome } from "react-icons/fa"
import { FaUserSecret } from "react-icons/fa"
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';
import Logout from './Jobs/Logout'
import Modal from 'react-awesome-modal'
import axios from "axios";
let applied;

let array;
class appliedJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
        }
        applied = cookie.load("user_name")
        array=cookie.load(cookie.load("id_account")).split('_')
        //array là mảng cookie chứa những id_job mà tài khoản apply, anh chỉ cần lọc công việc theo id trong mảng này nhé
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

    render() {
        return (
            <div>
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
                                    <div class="text-link" style={{ textDecoration: 'none', color: 'white' }} >
                                        <div>
                                            <FaUserSecret class="company_icon" style={{ fontSize: "25px" }}></FaUserSecret>
                                            <span>{applied}</span>
                                        </div>
                                    </div>
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
                <div style={{ width: "80%", backgroundColor: "white", marginLeft: '10%' }}>
                    <div style={{fontSize:'30px', fontStyle:"italic", marginLeft:"20px", paddingTop:"20px"}}>{applied}</div>
                    <ul style={{ listStyle: "none", marginLeft: "-40px", paddingBottom: "20px", paddingTop: "0px" }}>
                        {this.state.jobs.map(job => {
                            return (
                                <Link to={`/job-detail/${job.id}`} class="Viettel_link" >
                                    <li key={job.id} >
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

        )
    }

}
export default appliedJob;