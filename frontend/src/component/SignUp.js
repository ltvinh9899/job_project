import React, { Component } from 'react';
import './SignUp.css';
import multiply from "./image/multiply.png";
import ReactDOM from 'react-dom';
import axios from "axios";

class Login extends Component {
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
        // user.append('user_name', this.state.user_name);
        // user.append('user_email', this.state.user_email);
        // user.append('password', this.state.password);

        console.log(user);

        axios.post('http://127.0.0.1:8000/user-create/', user, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRFToken':csrftoken,
            }
        })
            .then(res => {
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            });

    }


    render() {
        console.log(this.state.message.message)
        return (
            <div class="login-page_sign">
                <div class="form_sign">
                    {/* <form class="register-form" onSubmit={this.handleSignUp}>
                        <input type="text" placeholder="Enter username" name="user_name" onChange={this.handleUserNameChange} class="log_sign" />
                        <div style={{ color: "red", marginLeft: "-210px", fontSize: "15px" }}  class="log_error_sign"></div>
                        <input type="password" placeholder="Enter password" name="user_email" onChange={this.handleEmailChange} class="log_sign" />
                        <div style={{ color: "red", marginLeft: "-210px", fontSize: "15px" }} class="log_error_sign"></div>
                        <div class="login_button" onClick={() => {
                             if (document.getElementsByClassName('log_sign')[0].value != "" && document.getElementsByClassName('log_sign')[1].value != "") {
                                 this.child_log_closeModal() 
                               
                            }
                            else {
                                this.check_form_log()
                            } 
                           
                        }}>Signup</div>
                        <p class="message_sign">Already registered? </p>
                    </form> */}

                    <form class="register-form" onSubmit={this.handleSignUp}>
                        <input type="text" placeholder="Enter username" name="user_name" onChange={this.handleUserNameChange} class="log_sign" />
                        <div style={{ color: "red", marginLeft: "-210px", fontSize: "15px" }} class="log_error_sign"></div>
                        <input type="text" placeholder="Enter email" name="user_email" onChange={this.handleEmailChange} class="log_sign" />
                        <div style={{ color: "red", marginLeft: "-210px", fontSize: "15px" }} class="log_error_sign"></div>
                        <input type="password" placeholder="Enter password" name="password" onChange={this.handlePasswordChange} class="log_sign" />
                        <div style={{ color: "red", marginLeft: "-210px", fontSize: "15px" }} class="log_error_sign"></div>
                        <button class="login_button" type="submit">Sign Up</button>
                        <p class="message_sign">Already registered? </p>
                        <p>{this.state.message.message}</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login