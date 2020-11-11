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

class Java extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            currentComponent: 'A',
            java_jobs: []
        }
    }

    componentDidMount() {
        const id_job_type = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/job-list/${id_job_type}/`).then(res => {
            // handle success
            const java_jobs = res.data;
            this.setState({ java_jobs });
            console.log(java_jobs);
          })
          .catch( error => {
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
                        <span>Jobs</span>
                    </div>
                    <ul style={{listStyle:"none", marginLeft:"-40px", paddingBottom:"20px"}}>
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
                                <div class="contentJob" style={{ marginLeft:"30px", marginTop:"60px"}}>
                                    <div class="nameJob">{java_job.name}</div>
                                    <div class="salaryJob">
                                        <div class="iconJob"><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
                                        <span>{java_job.offer_salary}  USD</span>
                                        <div class="iconJob" style={{marginLeft:"20px", fontSize:"22px"}}><BsPeopleCircle></BsPeopleCircle></div>
                                                <span  style={{ fontSize:"18px",marginLeft:"5px"}}>{java_job.job_position}</span>
                                    </div>
                                    <div class="priorityJob">
                                        {/* {java_job.description} */}
                                </div>
                                </div>
                                <div class="PlaceJob" style={{marginTop:"10px", marginRight:"20px", width:"540px"}}>
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
            </div>
        )
    }

}
export default Java;