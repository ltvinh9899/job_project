import React, { Component } from 'react'
import './Welcome.css';
import Logo from "./image/logo.png";
import { AiFillHome } from "react-icons/ai"
import { BsPeopleFill } from "react-icons/bs"
import { BsPeopleCircle } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { IoIosPeople } from "react-icons/io"
import { FaUserSecret } from "react-icons/fa"

import Modal from 'react-awesome-modal'
import Login from './Login'
import Logout from './Logout'

import ReactDOM from 'react-dom';
import SignUp from './SignUp'
import appliedJob from './appliedJob'
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';
import Java from './JobComponent/Java';
import CompanyList from './CompanyComponent/CompanyList'
import Viettel from './CompanyComponent/Viettel'
import FPT from './CompanyComponent/FPT'
import VNG from './CompanyComponent/VNG'
import VNPT from './CompanyComponent/VNPT'
import Misa from './CompanyComponent/Misa'
import Sun from './CompanyComponent/Sun'
import Hybrid from './CompanyComponent/Hybrid'
import Lg from './CompanyComponent/Lg'
import Toshiba from './CompanyComponent/Toshiba'
import KMS from './CompanyComponent/KMS'
import { Redirect } from "react-router"
import cookie from 'react-cookies'
let user;
let apply;
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible_first: false,
      visible_second: false,
      key_value: "",
      value: ""
    };
    user = cookie.load("user_name")//gán giá trị cookie cho biến user
    apply = cookie.load(user)


  }

  openModal(name_event) {
    if (name_event == "login") {
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
    this.setState({
      visible_first: false,
      visible_second: false
    });
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
    console.log(global.value00000)
    if (this.state.key_value === "") {
      return (
        <div id="container">
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
                      <Link to="/applied" style={{ textDecoration: 'none', color: 'white' }}>
                        <div>
                          <FaUserSecret class="company_icon" style={{ fontSize: "25px" }} ></FaUserSecret>
                          <span >{user}</span>
                        </div>
                      </Link>
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
          <div class="main_container">
            <div class="main_title">
              <span>Top Companies</span>
            </div>
            <div class="main_company">
              <div class="main_company_top">
                <ul>
                  <Link to="/company/2" class="company_link">
                    <li>
                      <div class="company_name_top">
                        <img src="https://cdn.itviec.com/employers/fpt-software/logo/w170/mir3HT3xtedbECJY5jVeRRgV/fpt-software-logo.png"></img>
                        <p>FPT Software</p>
                        <p class="number_jobs" style={{ marginLeft: "-80px" }}>Việt Nam</p>
                        <p class="city_jobs">TP Hồ Chí Minh</p>

                      </div>
                    </li>
                  </Link>

                  <Link to="/company/1" class="company_link">
                    <li>
                      <div class="company_name_top">
                        <img src="https://iptime.com.vn/wp-content/uploads/2018/12/logo-viettel.png"></img>
                        <p style={{ marginLeft: "-20px" }}>Viettel Group</p>
                        <p class="number_jobs" style={{ marginLeft: "-50px" }}>Việt Nam</p>
                        <p class="city_jobs" style={{ marginLeft: "60px" }}>Hà Nội</p>

                      </div>
                    </li>
                  </Link>
                  <Link to="/company/3" class="company_link">
                    <li>
                      <div class="company_name_top">
                        <img src="https://cdn.itviec.com/employers/hybrid-technologies/logo/w170/oZ68G6PENyitD3EWBPE9gqHf/avatar-10-10.jpg"></img>
                        <p style={{ marginLeft: "-40px" }}>Hybrid Technology</p>
                        <p class="number_jobs" style={{ marginLeft: "-70px" }}>Japan</p>
                        <p class="city_jobs" style={{ marginLeft: "20px" }}>TP Hồ Chí Minh</p>

                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
              <div class="main_company_bottom">
                <ul>

                  <Link to="/company/6" class="company_link">
                    <li>
                      <div class="company_name_top">
                        <img src="data:image/png;base64,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"></img>
                        <p style={{ marginLeft: "-20px" }}>Misa Software</p>
                        <p class="number_jobs" style={{ marginLeft: "-50px" }}>Việt Nam</p>
                        <p class="city_jobs" style={{ marginLeft: "60px" }}>Hà Nội</p>

                      </div>
                    </li>
                  </Link>
                  <Link to="/company/7" class="company_link">
                    <li>
                      <div class="company_name_top">
                        <img src="https://media-exp1.licdn.com/dms/image/C510BAQHH8DOLVDFRaQ/company-logo_200_200/0?e=2159024400&v=beta&t=oY93jegxzb0oTbneNGDNWBj7bz6qvUbB-tez_fBfnBE"></img>
                        <p style={{ marginLeft: "0px" }}>Sun* Inc</p>
                        <p class="number_jobs" style={{ marginLeft: "-50px" }}>Japan</p>
                        <p class="city_jobs" style={{ marginLeft: "60px" }}>Hà Nội</p>

                      </div>
                    </li>
                  </Link>
                  <Link to="/company/4" class="company_link">
                    <li>
                      <div class="company_name_top">
                        <img src="https://yt3.ggpht.com/a/AATXAJzjqpFgRI72dB7_m-vfmYZXgY3HkHWyIrztKg=s900-c-k-c0xffffffff-no-rj-mo"></img>
                        <p style={{ marginLeft: "-40px" }}>KMS Technology</p>
                        <p class="number_jobs" style={{ marginLeft: "-80px" }}>America</p>
                        <p class="city_jobs" style={{ marginLeft: "20px" }}>TP Hồ Chí Minh</p>

                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer_container">
            <div class="footer_search">
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
                <ul >
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
    let input_value = document.getElementById("search_input_text").value;
    switch (input_value) {
      case "Viettel Group":
        return (
          <Redirect to="./company/1" />
        )
        break;
      case "Misa Software":
        return (
          <Redirect to="./company/6" />
        )
        break;
      case "VNG Corporation":
        return (
          <Redirect to="./company/9" />
        )
        break;
      case "FPT Software":
        return (
          <Redirect to="./company/2" />
        )
        break;
      case "Sun* Inc":
        return (
          <Redirect to="./company/7" />
        )
        break;
      case "VNPT Technology":
        return (
          <Redirect to="./company/10" />
        )
        break;
      case "Toshiba Software":
        return (
          <Redirect to="./company/8" />
        )
        break;
      case "LG Việt Nam":
        return (
          <Redirect to="./company/5" />
        )
        break;
      case "KMS Technology":
        return (
          <Redirect to="./company/4" />
        )
        break;
      case "Hybrid Technology":
        return (
          <Redirect to="./company/3" />
        )
        break;
      case "Tester":
        return (
          <Redirect to="/job-list-follow-type/1" />
        )
        break;
      case "Java":
        return (
          <Redirect to="/job-list-follow-type/4" />
        )
        break;
      case "PHP":
        return (
          <Redirect to="/job-list-follow-type/6" />
        )
        break;
      case ".NET":
        return (
          <Redirect to="/job-list-follow-type/5" />
        )
        break;
      case "Javascript":
        return (
          <Redirect to="/job-list-follow-type/2" />
        )
        break;
      case "C++":
        return (
          <Redirect to="/job-list-follow-type/3" />
        )
        break;
      case "Internship":
        return (
          <Redirect to="/job-list-follow-position/1" />
        )
        break;
      case "Senior":
        return (
          <Redirect to="/job-list-follow-position/2" />
        )
        break;
      case "Fresher":
        return (
          <Redirect to="/job-list-follow-position/5" />
        )
        break;
      case "Freelancer":
        return (
          <Redirect to="/job-list-follow-position/4" />
        )
        break;
      case "Junior":
        return (
          <Redirect to="/job-list-follow-position/3" />
        )
        break;

        break;
      default:
        return (
          <Redirect to="./error" />
        )
    }

  }
}
export default Welcome;