import React, { Component } from 'react'
import './Welcome.css';
import Logo from "./image/logo.png";
import { AiFillHome } from "react-icons/ai"
import { BsPeopleFill } from "react-icons/bs"
import { BsPeopleCircle } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { IoIosPeople } from "react-icons/io"
import Modal from 'react-awesome-modal'
import Login from './Login'
import ReactDOM from 'react-dom';
import SignUp from './SignUp'
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

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible_first: false,
      visible_second: false,
      key_value: ""
    }
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

  render() {

    if (this.state.key_value === "") {
      return (
        <div id="container">
          <div class="header_container">
            <div class="header">
              <div class="header_left">
                <img src={Logo} />
                <span>IT JOB FOR EVERYONE</span>
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
                  <li class="login">
                    <div>
                      <BsPeopleCircle class="login_icon" onClick={() => this.openModal("login")}></BsPeopleCircle>
                      <span onClick={() => this.openModal("login")}>Log In</span>

                      <Modal
                        visible={this.state.visible_first}
                        width="400"
                        height="400"
                        backgroundColor="red"
                        effect="fadeInUp"
                        onClickAway={() => this.closeModal()}
                      >
                        <div class="loginScreen">
                          <Login parent_open={() => this.openModal("signup")} parent_close={() => this.closeModal("signup")}></Login>
                        </div>
                      </Modal>
                    </div>
                  </li>
                  <li class="Signup">
                    <div>
                      <IoIosPeople class="signup_icon" onClick={() => this.openModal("signup")}></IoIosPeople>
                      <span onClick={() => this.openModal("signup")}>Sign Up</span>
                      <Modal
                        visible={this.state.visible_second}
                        width="400"
                        height="450"
                        backgroundColor="red"
                        effect="fadeInUp"
                        onClickAway={() => this.closeModal()}
                      >
                        <div>
                          <SignUp parent_close={() => this.closeModal("login")}></SignUp>
                        </div>
                      </Modal>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="header_search">
              <input type="text" style={{ paddingLeft: "40px" }} placeholder="Key word for finding job" id="search_input_text" onKeyDown={(event) => {
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

                <li><Link to="/job-list-follow-type/1" className='text-link'  ><div>Java</div></Link></li>
                <li><Link to="/job-list-follow-type/2" className='text-link'  ><div>.NET</div></Link></li>
                <li><Link to="/job-list-follow-type/3" className='text-link'  ><div>PHP</div></Link></li>
                <li><Link to="/job-list-follow-type/4" className='text-link'  ><div>NodeJs</div></Link></li>
                <li><Link to="/job-list-follow-type/5" className='text-link'  ><div>Android</div></Link></li>
                <li><Link to="/job-list-follow-type/6" className='text-link'  ><div>IOS</div></Link></li>
                <li><Link to="/job-list-follow-type/7" className='text-link'  ><div>C++</div></Link></li>
                <li><Link to="/job-list-follow-type/8" className='text-link'  ><div>Tester</div></Link></li>
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
                  <Link to="/company/3" class="company_link">
                    <li>
                      <div class="company_name_top">
                        <img src="https://cdn.itviec.com/employers/fpt-software/logo/w170/mir3HT3xtedbECJY5jVeRRgV/fpt-software-logo.png"></img>
                        <p>FPT Software</p>
                        <p class="number_jobs">20 jobs</p>
                        <p class="city_jobs">Hồ Chí Minh</p>

                      </div>
                    </li>
                  </Link>

                  <Link to="/company/2" class="company_link">
                    <li>
                      <div class="company_name_top">
                        <img src="https://iptime.com.vn/wp-content/uploads/2018/12/logo-viettel.png"></img>
                        <p style={{ marginLeft: "-20px" }}>Viettel Group</p>
                        <p class="number_jobs" style={{ marginLeft: "-50px" }}>20 jobs</p>
                        <p class="city_jobs" style={{ marginLeft: "60px" }}>Hà Nội</p>

                      </div>
                    </li>
                  </Link>
                  <Link to="/company/4" class="company_link">
                    <li>
                      <div class="company_name_top">
                        <img src="https://cdn.theorg.com/8a0b151b-3328-4d85-b43e-54bd8bd8f187_thumb.png"></img>
                        <p style={{ marginLeft: "-40px" }}>VNG Corporation</p>
                        <p class="number_jobs" style={{ marginLeft: "-50px" }}>20 jobs</p>
                        <p class="city_jobs" style={{ marginLeft: "60px" }}>Hà Nội</p>

                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
              <div class="main_company_bottom">
                <ul>
                  {/* <Link to="/VNPT" class="company_link">
                    <li>
                      <div class="company_name_top">
                        <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/6/65/VNPT_Logo.svg/1200px-VNPT_Logo.svg.png"></img>
                        <p style={{ marginLeft: "-40px" }}>VNPT Technology</p>
                        <p class="number_jobs" style={{ marginLeft: "-50px" }}>20 jobs</p>
                        <p class="city_jobs" style={{ marginLeft: "60px" }}>Hà Nội</p>
  
                      </div>
                    </li>
                  </Link> */}
                  <Link to="/company/5" class="company_link">
                    <li>
                      <div class="company_name_top">
                        <img src="data:image/png;base64,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"></img>
                        <p style={{ marginLeft: "-20px" }}>Misa Software</p>
                        <p class="number_jobs" style={{ marginLeft: "-50px" }}>20 jobs</p>
                        <p class="city_jobs" style={{ marginLeft: "60px" }}>Hà Nội</p>

                      </div>
                    </li>
                  </Link>
                  <Link to="/company/6" class="company_link">
                    <li>
                      <div class="company_name_top">
                        <img src="https://media-exp1.licdn.com/dms/image/C510BAQHH8DOLVDFRaQ/company-logo_200_200/0?e=2159024400&v=beta&t=oY93jegxzb0oTbneNGDNWBj7bz6qvUbB-tez_fBfnBE"></img>
                        <p style={{ marginLeft: "0px" }}>Sun* Inc</p>
                        <p class="number_jobs" style={{ marginLeft: "-50px" }}>20 jobs</p>
                        <p class="city_jobs" style={{ marginLeft: "60px" }}>Hà Nội</p>

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
                <ul>
                  <li><Link to="/java" className='text-link-footer'  ><div>Java</div></Link></li>
                  <li><a>PHP</a></li>
                  <li><a>.NET</a></li>
                  <li><a>JavaScript</a></li>
                  <li><a>NodeJS</a></li>
                  <li><a>Android</a></li>
                  <li><a>Ios</a></li>

                </ul>
              </div>
              <div class="footer_search_position">
                <div>Jobs by Position</div>
                <ul>
                  <li><a>Internship</a></li>
                  <li><a>Fresher</a></li>
                  <li><a>Junior</a></li>
                  <li><a>Leader</a></li>
                  <li><a>Senior</a></li>
                </ul>
              </div>
              <div class="footer_search_company">
                <div>Jobs by Company</div>
                <ul>
                  {/* <li><Link to="/company/" class="link_company">VNPT Technology</Link></li> */}
                  <li><Link to="/company/5" class="link_company">Misa Software</Link></li>
                  <li><Link to="/company/4" class="link_company">VNG Corporation</Link></li>
                  <li><Link to="/company/3" class="link_company">FPT Software</Link></li>
                  <li><Link to="/company/6" class="link_company">Sun* Inc</Link></li>
                  <li><Link to="/company/2" class="link_company">Viettel Group</Link></li>
                  {/* <li><Link to="./Toshiba" class="link_company">Toshiba Software</Link></li>
                  <li><Link to="./LG" class="link_company">LG Việt Nam</Link></li>
                  <li><Link to="./KMS" class="link_company">KMS Technology</Link></li>
                  <li><Link to="./Hybrid" class="link_company">Hybrid Technology</Link></li> */}


                </ul>
              </div>
            </div>
          </div>

        </div>
      )
    }
    let input_value = document.getElementById("search_input_text").value;
    switch (input_value) {
      case "Viettel":
        return (
          <Redirect to="./company/2" />
        )
        break;
      case "Misa":
        return (
          <Redirect to="./company/5" />
        )
        break;
      case "VNG":
        return (
          <Redirect to="./company/4" />
        )
        break;
      case "FPT":
        return (
          <Redirect to="./company/3" />
        )
        break;
      case "Sun* Inc":
        return (
          <Redirect to="./company/6" />
        )
        break;
      default:
        return (
          <Redirect to="./error" />
        )
    }
    /* let input_value;
    if (input_array.includes(document.getElementById("search_input_text").value)) {

      switch (input_value) {
        case "Viettel":
          return (
            <Redirect to="./company/2" />
          )
          break;

      } */
  }
}
export default Welcome;