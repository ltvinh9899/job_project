import React, { Component } from 'react';
import Logo from "./image/logo.png";
import background_image from "./image/viettel.jpg"
import country from "./image/VN-Vietnam-Flag-icon.png"
import Viettel_logo from "./image/viettel-group-logo.jpg"
import logo_viettel from "./image/Logo_Viettel.png"

import Viettel_content from "./image/Viettel_content.png"


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
import { BiCalendar, BiMap } from "react-icons/bi"
import { SiGooglemaps } from "react-icons/si"
import { AiFillSetting } from "react-icons/ai"
import Logout from '../Logout'
import Modal from 'react-awesome-modal'
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';
import "./Viettel.css"

class Lg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            currentComponent: 'A'
        }
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
                        <img src={Logo} />
                        <span>IT JOB FOR EVERYONE</span>
                    </div>
                    <div class="header_company_right">
                        <ul>
                            <li class="job">
                                <div >
                                    <BsPeopleFill class="job_icon"></BsPeopleFill>
                                    <span>Job</span>
                                </div>
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
                <div class="viettel_company_main">
                    <div class="Viettel_tester_main_image">
                        <img src="https://cdn.itviec.com/photos/40792/processed_headline_photo/lg-development-center-vietnam-tuyen-dung-viec-lam-IT-headline_photo-1225369.JPG?He6mLuRivgoA8J3uhAvTcptL" />
                    </div>
                    <div class=" Viettel_company_main_content">
                        <div class="Viettel_company_main_content_header">
                            <div>
                                <img src="https://1000logos.net/wp-content/uploads/2017/03/LG-Symbol.jpg" />
                            </div>
                            <div class="Viettel_company_name">
                                <p>LG Việt Nam</p>
                                <div class="Viettel_company_icon">
                                    <ul>
                                        <li>
                                            <div>
                                                <SiGooglemaps class="icon"></SiGooglemaps>
                                                <p>Nam Tu Liem, Ha Noi</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="country_flag">
                                                <div>
                                                    <AiFillSetting class="icon"></AiFillSetting>
                                                    <p>Product</p>
                                                </div>
                                                <div class="country_flag_icon">
                                                    <div id="icon"><img src={country} /></div>
                                                    <div id="text"><p>Việt Nam</p></div>

                                                </div>
                                            </div>

                                        </li>
                                        <li>

                                            <div>
                                                <BiCalendar class="icon"></BiCalendar>
                                                <p>Monday - Saturday</p>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Viettel_company_main_content_intro">
                        <p>Giới thiệu về LG Việt Nam</p>
                        <div class="content" id="first_content">With the advent of the Smart Car era, LG hopes to become an innovative partner in vehicle
                        electrification through development of advanced technology components. Vehicle Component Solutions Company
                        is developing a wide variety of highly competitive products
                        Our products include In Vehicle Infotainment system such as Telematics, AV Navigation, Display Audio,
                        Integrated Display System, and Advanced Driver Assistant System (ADAS)
                        called ‘intelligent safe’, and other convenient devices
                        </div>
                        <div class="content" id="second_content">
                            We offer an environment that enables colleagues to demonstrate their capabilities, focus on their work and create value.
                        </div>
                    </div>
                    <div class="Viettel_company_main_content_choice">
                        <div class="Job">
                            <div class="Job_title">Jobs</div>
                            <div class="descriptionJob">
                                <div class="SpecificallyJob">
                                    <div class="logoCompany">
                                        <div><img src="https://1000logos.net/wp-content/uploads/2017/03/LG-Symbol.jpg" /></div>
                                    </div>
                                    <div class="contentJob">
                                        <div class="nameJob">5 java Dev</div>
                                        <div class="salaryJob">
                                            <div class="iconJob"><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
                                            <span>700 - 1500 USD</span>
                                        </div>
                                        <div class="priorityJob">
                                            <ul>
                                                <li>Làm việc tại Hà Nội</li>
                                                <li>Được đóng bảo hiểm</li>
                                                <li>Môi trường làm việc năng động</li>
                                            </ul>
                                        </div>
                                        <div class="requiredJob">
                                            Tham gia phát triển các ứng dụng trên nền tảng Java cho khách hàng Nhật Bản
                                     <br />
                                     Tham gia đầy đủ các công đoạn của dự án từ tìm hiểu yêu cầu, phân tích,...
                                </div>
                                    </div>
                                    <div class="PlaceJob">
                                        <div class="city">
                                            <div class="icon">
                                                <FaCity ></FaCity>
                                            </div>
                                            <span>Hà Nội</span>

                                        </div>
                                        <div class="distric">
                                            <div class="icon">
                                                <GiModernCity ></GiModernCity>
                                            </div>
                                            <span>Cầu Giấy</span>
                                        </div>
                                        <div class="address">
                                            <div class="icon">
                                                <FaHome></FaHome>
                                            </div>
                                            <span>133 Hoàng Quốc Việt</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Lg;