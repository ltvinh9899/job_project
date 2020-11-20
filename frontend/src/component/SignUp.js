import React, { Component } from 'react';
import './SignUp.css';
import multiply from "./image/multiply.png";
import ReactDOM from 'react-dom';
import axios from "axios";
import { Redirect } from "react-router"
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';
import Start from './Start'
import Login from './Login'
import Welcome from './Welcome'
import { BiDna } from 'react-icons/bi';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: [],
            user_email: '',
            user_name: '',
            password: ''

        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/user-create/').then(res => {
            // handle success
            const message = res.data;
            this.setState({ message });
            console.log(message);
        })
            .catch(error => {
                // handle error
                console.log(error);
            })

    }

    check_form_log() {
        if (document.getElementsByClassName('log_sign')[0].value == "") {
            const element = <div>
                <img class="multiply_icons" src={multiply}></img>
                <p style={{ marginTop: "-25px", marginLeft: "80px", fontWeight: 500 }}>can't be blank</p>
            </div>;
            ReactDOM.render(element, document.getElementsByClassName('log_error_sign')[0]);

        }
        if (document.getElementsByClassName('log_sign')[1].value == "") {
            const element = <div>
                <img class="multiply_icons" src={multiply}></img>
                <p style={{ marginTop: "-25px", marginLeft: "80px", fontWeight: 500 }}>can't be blank</p>
            </div>;
            ReactDOM.render(element, document.getElementsByClassName('log_error_sign')[1]);
        }
        if (document.getElementsByClassName('log_sign')[2].value == "") {
            const element = <div>
                <img class="multiply_icons" src={multiply}></img>
                <p style={{ marginTop: "-25px", marginLeft: "80px", fontWeight: 500 }}>can't be blank</p>
            </div>;
            ReactDOM.render(element, document.getElementsByClassName('log_error_sign')[2]);
        }


    }
    child_log_closeModal() {
        this.props.parent_close();
        document.getElementsByClassName('log_sign')[0].value = ""
        document.getElementsByClassName('log_sign')[1].value = ""
        ReactDOM.render(<div></div>, document.getElementsByClassName('log_error_sign')[0]);
        ReactDOM.render(<div></div>, document.getElementsByClassName('log_error_sign')[1]);

    }

    handleUserNameChange = event => {
        this.setState({
            user_name: event.target.value

        });
    }

    handleEmailChange = event => {
        this.setState({
            user_email: event.target.value

        });
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    }
    checkEmail = () => {
        var email = document.getElementById('email');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email.value)) {
            const element = <div>
                <img class="multiply_icons" src={multiply}></img>
                <p style={{ marginTop: "-25px", marginLeft: "80px", fontWeight: 500 }}>Invalid Email</p>
            </div>;
            ReactDOM.render(element, document.getElementsByClassName('log_error_sign')[1]);
        }

    }

    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    handleSignUp = event => {
        event.preventDefault();

        var csrftoken = this.getCookie('csrftoken')

        const user = {};
        user.user_name = this.state.user_name
        user.user_email = this.state.user_email
        user.password = this.state.password

        console.log(user);

        axios.post('http://127.0.0.1:8000/user-create/', user, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
            .then(res => {
                const messages = res.data;
                this.setState({ messages });
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            });
    }
    handleLogin = event => {
        event.preventDefault();

        var csrftoken = this.getCookie('csrftoken')

        const user = {};
        this.state.user_email = "none";
        user.user_name = this.state.user_name;
        user.user_email = this.state.user_email;
        user.password = this.state.password;

        console.log(user);

        axios.post('http://127.0.0.1:8000/user-login/', user, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
            .then(res => {
                const messages = res.data;
                this.setState({ messages });
            }).catch((error) => {
                console.log(error)
            });


    }

    redirectLogin = () => {
        window.location = "/"
    }
    confirmLogin() {
        const notifyLogin = <div style={{ marginTop: "20px" }}>
            <span style={{ color: "green", fontSize: "15px", marginLeft: "0px" }}>Đăng kí thành công!</span>
            <span onClick={() => this.redirectLogin()} style={{ color: "brown" }}>Đăng nhập</span>
        </div>
        ReactDOM.render(notifyLogin, document.getElementById("message_signup"))
    }


    render() {
        const password_length = 6;
        var email = document.getElementById('email');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return (
            <div class="login-page_sign">
                <div class="form_sign">
                    <input type="text" placeholder="Enter username" name="user_name" onChange={this.handleUserNameChange} class="log_sign" />
                    <div style={{ color: "red", marginLeft: "-210px", fontSize: "15px" }} class="log_error_sign"></div>
                    <input type="text" placeholder="Enter email" name="user_email" onChange={this.handleEmailChange} class="log_sign" id="email" />
                    <div style={{ color: "red", marginLeft: "-210px", fontSize: "15px" }} class="log_error_sign"></div>
                    <input type="password" placeholder="Enter password" name="password" onChange={this.handlePasswordChange} class="log_sign" />
                    <div style={{ color: "red", marginLeft: "-210px", fontSize: "15px" }} class="log_error_sign"></div>
                    <button class="login_button" onClick={(event) => {

                        if (document.getElementsByClassName('log_sign')[1].value != "" && !filter.test(email.value)) {
                            const element = <div>
                                <img class="multiply_icons" src={multiply}></img>
                                <p style={{ marginTop: "-25px", marginLeft: "80px", fontWeight: 500 }}>Invalid Email</p>
                            </div>;
                            ReactDOM.render(element, document.getElementsByClassName('log_error_sign')[1]);
                        }
                        else {
                            if (document.getElementsByClassName('log_sign')[2].value != "" && document.getElementsByClassName('log_sign')[2].value.length <= password_length) {
                                const element = <div>
                                    <img class="multiply_icons" src={multiply}></img>
                                    <p style={{ marginTop: "-25px", marginLeft: "180px", fontWeight: 500 }}>Must be at least 8 characters</p>
                                </div>;
                                ReactDOM.render(element, document.getElementsByClassName('log_error_sign')[2]);
                            }
                            else {
                                if (document.getElementsByClassName('log_sign')[0].value != "" && document.getElementsByClassName('log_sign')[1].value != "" && document.getElementsByClassName('log_sign')[2].value != "") {
                                    this.handleSignUp(event)
                                    setTimeout(() => this.confirmLogin(), 500)//hàm setTimeout nhận tham số là 1 callback func
                                }
                                else {
                                    this.check_form_log();
                                }
                            }
                        }
                    }
                    }

                    >Sign Up</button>
                      <p class="message_login" style={{color:"#a0a0a0", fontSize:"15px", marginTop:"25px"}} >Already to registered?</p>
                    <div id="message_signup" ></div>
                </div>
            </div>
        )

    }
}

export default SignUp