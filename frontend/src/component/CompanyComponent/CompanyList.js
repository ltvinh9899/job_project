import React, { Component } from 'react'
import { AiFillHome } from "react-icons/ai"
import { BsPeopleFill } from "react-icons/bs"
import { BsPeopleCircle } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { IoIosPeople } from "react-icons/io"
import { FaQuoteLeft } from "react-icons/fa"
import { FaQuoteRight } from "react-icons/fa"

import Modal from 'react-awesome-modal'
import Logo from "../image/logo.png";
import Logo_company from "../image/best_company.png";
import Star from "../image/star.png";
import viettel from "./image/Logo_Viettel.png"
import "./CompanyList.css"
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom'
import Logout from '../Logout'
import axios from "axios";

class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            currentComponent: 'A',
            companies: [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/companies-list/').then(res => {
            // handle success
            const companies = res.data;
            this.setState({ companies });
            console.log(companies);
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
            <div class="container_company">
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
                                <div>
                                    <AiFillHome class="company_icon"></AiFillHome>
                                    <span >Company</span>
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
                <div class="main_company_list">
                    <div class="introduce_main_company">
                        <div class="content_main_company">
                            <h1>Vietnam Best IT Companies 2019</h1>
                            <p>The employees have spoken! Here are the Top Vietnam Best IT Companies 2019 to work for based on 11,000+ reviews submitted by IT people.</p>
                        </div>
                        <div class="logo_main_company">
                            <div class="logo_best_company">
                                <img src={Logo_company} />

                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div class="list_main_company">
                        <ul>
                            {this.state.companies.map(company => {
                                return (
                                    <Link to={`/company/${company.id}`} class="Viettel_link">
                                    <li key={company.id}>
                                        <div class="name_list_company">
                                        <h2>{company.name_company}</h2>
                                        </div>
                                        <div class="other_introduce">
                                            <div class="frame_logo"><img style={{width:"160px", height:"130px"}} src={company.logo_company} /></div>
                                            <div class="comment_company">
                                                <div class="comment_company_icons">
                                                    <div><FaQuoteLeft></FaQuoteLeft></div>
                                                    <span>{company.description_company}
                                               </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    </Link>
                                );
    
                            })}
                            
                            </ul>
                            {/* <Link to="/Viettel" class="Viettel_link">
                                <li>
                                    <div class="name_list_company">
                                        <h2>Viettel Group</h2>
                                    </div>
                                    <div class="other_introduce">
                                        <div class="frame_logo"><img style={{width:"160px", height:"130px"}} src="https://iptime.com.vn/wp-content/uploads/2018/12/logo-viettel.png" /></div>
                                        <div class="comment_company">
                                            <ul>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                            </ul>
                                            <div class="comment_company_icons">
                                                <div><FaQuoteLeft></FaQuoteLeft></div>
                                                <span>Tập đoàn Công nghiệp – Viễn thông Quân đội Viettel - Nơi làm việc tốt nhất Việt Nam 2017, 2018 ngành Viễn thông (theo khảo sát Anphabe)
                                                là Doanh nghiệp viễn thông có tốc độ tăng trưởng nhanh nhất thế giới, luôn đi đầu trong đổi mới sáng tạo và luôn lắng nghe,
                                                thấu hiểu để đem tới những dịch vụ tốt nhất cho khách hàng
                                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/FPT" class="Viettel_link">
                                <li>
                                    <div class="name_list_company">
                                        <h2  style={{marginLeft:"10px"}}>FPT Telecom</h2>
                                    </div>
                                    <div class="other_introduce">
                                        <div class="frame_logo"><img style={{width:"160px", height:"130px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/1200px-FPT_logo_2010.svg.png" /></div>
                                        <div class="comment_company">
                                            <ul>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                            </ul>
                                            <div class="comment_company_icons">
                                                <div><FaQuoteLeft></FaQuoteLeft></div>
                                                <span>FPT Telecom là 1 trong 3 nhà cung cấp dịch vụ viễn thông, Internet hàng đầu Việt Nam và đang dần khẳng định trong 
                                                    top đầu những nhà cung cấp dịch vụ Viễn thông ở khu vực Đông Nam Á như Myanma, Campuchia, Lào, 
                                                    với trên 10.000 nhân viên và 59 chi nhánh trong nước, 8 chi nhánh ở nước ngoài. 
                                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/Misa" class="Viettel_link">
                                <li>
                                    <div class="name_list_company">
                                        <h2>Misa Software</h2>
                                    </div>
                                    <div class="other_introduce">
                                        <div class="frame_logo"><img style={{width:"160px", height:"130px"}} src="https://cdn.itviec.com/employers/misa/logo/w170/pwUtFaqVoZkWjZmfh3DKBxKC/misa-logo.jpg" /></div>
                                        <div class="comment_company">
                                            <ul>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                            </ul>
                                            <div class="comment_company_icons">
                                                <div><FaQuoteLeft></FaQuoteLeft></div>
                                                <span>Hơn 25 năm hình thành và phát triển, MISA đã xây dựng được đội ngũ nhân sự gần 2.000 và khẳng định vị thế của mình trong lĩnh vực phần mềm: 
                                                    Top 5 công ty CNTT và Top 1 công ty làm sản phẩm tại Việt Nam.
                                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/Hybrid" class="Viettel_link">
                                <li>
                                    <div class="name_list_company">
                                        <h2 style={{marginLeft:"-30px"}}>Hybrid Technology</h2>
                                    </div>
                                    <div class="other_introduce">
                                        <div class="frame_logo"><img style={{width:"200px", height:"170px"}} src="https://cdn.itviec.com/employers/hybrid-technologies/logo/w170/oZ68G6PENyitD3EWBPE9gqHf/avatar-10-10.jpg" /></div>
                                        <div class="comment_company">
                                            <ul>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                            </ul>
                                            <div class="comment_company_icons">
                                                <div><FaQuoteLeft></FaQuoteLeft></div>
                                                <span>Hybrid Technologies Co., Ltd. là công ty công nghệ phần mềm liên doanh Nhật - Việt, 
                                                    chính thức thành lập vào tháng 4/2016 với tiền thân là Evolable Asia Solutions Co., Ltd., 
                                                    phát triển các dịch vụ và mô hình làm việc đa dạng như mô hình hybrid, mô hình ủy thác hay lĩnh vực trí tuệ nhân tạo.
                                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/VNG" class="Viettel_link">
                                <li>
                                    <div class="name_list_company">
                                        <h2 style={{marginLeft:"-20px"}}>VNG Corporation</h2>
                                    </div>
                                    <div class="other_introduce">
                                        <div class="frame_logo"><img src="https://i0.wp.com/minh.la/wp-content/uploads/2020/04/VNG350.png?w=3840&ssl=1" /></div>
                                        <div class="comment_company">
                                            <ul>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                            </ul>
                                            <div class="comment_company_icons">
                                                <div><FaQuoteLeft></FaQuoteLeft></div>
                                                <span>VNG believes in the power of the Internet and sees it as its mission to bring Internet users meaningful experiences. 
                                                    Each day, millions of young Vietnamese entertain, network and make friends, 
                                                    shop online or engage in social activities through VNG products, which are the ways VNG creates value for the society.
                                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/VNPT" class="Viettel_link">
                                <li>
                                    <div class="name_list_company">
                                        <h2 style={{marginLeft:"-20px"}}>VNPT Technology</h2>
                                    </div>
                                    <div class="other_introduce">
                                        <div class="frame_logo"><img style={{width:"180px", height:"180px"}} src="https://cdn.printgo.vn/uploads/file-logo/1/512x512.6cb97c9d25a3455adb806e42b8cbcd0f.ai.1.png" /></div>
                                        <div class="comment_company">
                                            <ul>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                            </ul>
                                            <div class="comment_company_icons">
                                                <div><FaQuoteLeft></FaQuoteLeft></div>
                                                <span>Kế thừa nguồn lực và kinh nghiệm tích lũy sau gần 20 năm của các liên doanh 
                                                    Alcatel Network Systems Vietnam - ANSV 
                                                    và Telecommunications Equipment - Teleq 
                                                     sở hữu và tiếp tục phát triển đội ngũ chuyên gia trưởng thành từ những ngày đầu của thời kỳ số hóa mạng viễn thông,
                                                     cùng với hạ tầng kỹ thuật được tích lũy và tiếp tục phát triển từ các liên doanh. 
                                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/Sun" class="Viettel_link">
                                <li>
                                    <div class="name_list_company">
                                        <h2 style={{marginLeft:"30px"}}>Sun* Inc</h2>
                                    </div>
                                    <div class="other_introduce">
                                        <div class="frame_logo"><img style={{width:"160px", height:"130px"}} src="https://cdn.itviec.com/employers/sun-inc/logo/w170/cDcdNbGCaVV5xgnmz8Vfv4ed/framgia-inc-logo.jpg" /></div>
                                        <div class="comment_company">
                                            <ul>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                            </ul>
                                            <div class="comment_company_icons">
                                                <div><FaQuoteLeft></FaQuoteLeft></div>
                                                <span>Tại Sun*, chúng tôi tham gia tư vấn cho khách hàng với tư cách là công ty chuyên nghiệp trên nhiều lĩnh vực khác nhau,
                                                     không chỉ về lập trình hay thiết kế mà cả quản lý dự án, tư vấn thiết kế và kinh doanh, cung cấp tài chính hay marketing. 
                                                    Bên cạnh đó, Sun* còn tạo ra các dịch vụ, lĩnh vực kinh doanh mới và thành lập các công ty con.
                                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/LG" class="Viettel_link">
                                <li>
                                    <div class="name_list_company">
                                        <h2  style={{marginLeft:"8px"}}>LG Việt Nam</h2>
                                    </div>
                                    <div class="other_introduce">
                                        <div class="frame_logo"><img style={{width:"170px", height:"150px"}} src="https://1000logos.net/wp-content/uploads/2017/03/LG-Symbol.jpg" /></div>
                                        <div class="comment_company">
                                            <ul>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                            </ul>
                                            <div class="comment_company_icons">
                                                <div><FaQuoteLeft></FaQuoteLeft></div>
                                                <span>With the advent of the Smart Car era, LG hopes to become an innovative partner in vehicle electrification through development of advanced technology components.
                                                     Vehicle Component Solutions Company (VS) is developing a wide variety of highly competitive products. Our products include In Vehicle Infotainment system  and other convenient devices.
                                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/Toshiba" class="Viettel_link">
                                <li>
                                    <div class="name_list_company">
                                        <h2 style={{marginLeft:"-20px"}}>Toshiba Software</h2>
                                    </div>
                                    <div class="other_introduce">
                                        <div class="frame_logo"><img style={{width:"170px", height:"100px"}} src="https://cdn.itviec.com/employers/toshiba-software-development-viet-nam-co-ltd/logo/w170/qmEermNPcp6FuQfTvY7J91na/toshiba-software-development-viet-nam-co-ltd-logo.png" /></div>
                                        <div class="comment_company">
                                            <ul>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                            </ul>
                                            <div class="comment_company_icons">
                                                <div><FaQuoteLeft></FaQuoteLeft></div>
                                                <span>Established in April 2007, Toshiba Software Development (Vietnam) Co., 
                                                    Ltd is a software company with 100% capital invested from Toshiba Corporation (Japan).
                                                     As one of oversea R& D centers of Toshiba Corporate in software development field, we are developing software for variety of Toshiba products
                                                      & solutions. 
                                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/KMS" class="Viettel_link">
                                <li>
                                    <div class="name_list_company">
                                        <h2 style={{marginLeft:"-20px"}}>KMS Technology</h2>
                                    </div>
                                    <div class="other_introduce">
                                        <div class="frame_logo"><img style={{width:"150px", height:"150px"}} src="data:image/png;base64,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" /></div>
                                        <div class="comment_company">
                                            <ul>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                                <li><div class="comment_company_star"><img src={Star} /></div></li>
                                            </ul>
                                            <div class="comment_company_icons">
                                                <div><FaQuoteLeft></FaQuoteLeft></div>
                                                <span>Established in 2009, KMS Technology is a U.S.-based engineering and services company with development centers in Vietnam.
                                                     KMS Technology is trusted by international clients for the superior quality of products and expertise of Vietnamese engineers.
                                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link> */}
                        
                    </div>
                </div>
            </div >
        )
    }
}
export default CompanyList;