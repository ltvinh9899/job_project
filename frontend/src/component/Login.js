import React, { Component } from 'react';
import multiply from "./image/multiply.png";
import ReactDOM from 'react-dom';
import { Redirect } from "react-router"
import { TiTick } from "react-icons/ti"
import './Login.css';
import axios from "axios";
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';
import cookie from 'react-cookies'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_email: '',
            user_name: '',
            password: '',
            messages: [],


        }
    }
    move_to_SignUp() {
        this.props.parent_open()
    }
    check_form_log() {
        if (document.getElementsByClassName('log')[0].value == "") {
            const element = <div>
                <img class="multiply_icons" src={multiply}></img>
                <p style={{ marginTop: "-25px", marginLeft: "80px", fontWeight: 500 }}>can't be blank</p>
            </div>;
            ReactDOM.render(element, document.getElementsByClassName('log_error')[0]);
        }
        if (document.getElementsByClassName('log')[1].value == "") {
            const element = <div>
                <img class="multiply_icons" src={multiply}></img>
                <p style={{ marginTop: "-25px", marginLeft: "80px", fontWeight: 500 }}>can't be blank</p>
            </div>;
            ReactDOM.render(element, document.getElementsByClassName('log_error')[1]);
        }


    }
    
    child_log_closeModal = () => {
        this.props.parent_close();
        document.getElementsByClassName('log')[0].value = ""
        document.getElementsByClassName('log')[1].value = ""
        ReactDOM.render(<div></div>, document.getElementsByClassName('log_error')[0]);
        ReactDOM.render(<div></div>, document.getElementsByClassName('log_error')[1]);

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

    handleLogin = event => {
        event.preventDefault();

        var csrftoken = this.getCookie('csrftoken')

        const user = {};
        this.state.user_email = "none";
        user.user_name = this.state.user_name;
        user.user_email = this.state.user_email;
        user.password = this.state.password;

        // console.log(user);

        axios.post('http://127.0.0.1:8000/user-login/', user, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
            .then(res => {
                const messages = res.data;
                console.log(messages)
                this.setState({ messages });
            }).catch((error) => {
                console.log(error)
            });
    }
  
    render() {
         if (this.state.messages.success === true) {
            cookie.save("user_name", document.getElementsByClassName("log")[0].value, { path: "/" })
            return (
                <Redirect to="/Welcome"></Redirect>
            )
        }
       
    return(
            <div class = "login-page_login" >
        <div class="form_login">
            <form class="login-form_login" onSubmit={this.handleLogin} >
                <input type="text" placeholder="Enter username" name="user_name" onChange={this.handleUserNameChange} class="log" />
                <div style={{ color: "red", marginLeft: "-210px", fontSize: "15px" }} class="log_error">

                </div>
                <input type="password" placeholder="Enter password" name="password" onChange={this.handlePasswordChange} class="log" />
                <div style={{ color: "red", marginLeft: "-210px", fontSize: "15px" }} class="log_error">
                </div>
                <button id="login_button" onClick={() => {
                    if (this.state.messages.success !== true) {
                        const element = <p style={{ color: "red" }}>Tài khoản không tồn tại</p>
                        ReactDOM.render(element, document.getElementById("message_login"));
                    }

                }}
                >Oke</button>
                <div id="message_login" style={{ fontSize: "15px" }}></div>
                <p class="message_login" >Not registered? <a onClick={() => this.move_to_SignUp()}>Create an account</a></p>
                <div id="confirm_login"></div>

            </form>
        </div>
            </div >
        )
    }
}

export default Login; 