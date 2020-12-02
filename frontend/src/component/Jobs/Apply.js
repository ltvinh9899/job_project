import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';
import multiply from "./ViettelJob/image/multiply.png"
import "./apply.css"
import axios from "axios"
import cookie from 'react-cookies'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { TiTick } from "react-icons/ti"
=======
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78
=======
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78
=======
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78
=======
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78
=======
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78
=======
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78

class Apply extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.myRef = React.createRef();
        this.state = {
            selectedFileName: "",
            buttonName: "Select your CV",
            full_name: '',
            cv: '',
            id_user: 0,
            messages: [],
        }
    }
    handleselectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
            selectedFileName: event.target.files[0].name,
            buttonName: event.target.files[0].name
        });
    }
    handleClick = (event) => {
        this.applyCVRef.current.click();
    }
    child_closeModal() {
        this.props.parentMethod();
    }
    check_form() {
        if (document.getElementById('name').value == "") {
            const element = <div>
                <img class="multiply_icons" src={multiply}></img>
                <p>can't be blank</p>
            </div>;
            ReactDOM.render(element,
                document.getElementsByClassName('form_error')[0]);
        }
        if (document.getElementById('cv').value == "") {
            const element = <div>
                <img class="multiply_icons" src={multiply}></img>
                <p>can't be blank</p>
            </div>;
            ReactDOM.render(element,
                document.getElementsByClassName('form_error')[1]);
        }
    }
    handleFullNameChange = event => {
        this.setState({
            full_name: event.target.value
        });
    }
    handleCVChange = event => {
        this.setState({
            cv: event.target.value
        });
    }
    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();// Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    handleApply = event => {
        event.preventDefault();
        var csrftoken = this.getCookie('csrftoken')
        const user = {};
        this.state.id_user = cookie.load("id_account");
        // user.full_name = this.state.full_name;
        // user.id_user = this.state.id_user;
        const formData = new FormData();
        formData.append("full_name", this.state.full_name);
        formData.append("id_user", this.state.id_user);
        formData.append(
            "cv",
            this.state.selectedFile,
            this.state.selectedFileName
        );
        console.log(formData);
        axios.post(`http://127.0.0.1:8000/user-apply/`, formData, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
            .then(res => {
                const messages = res.data;
                this.setState({ messages });
                console.log(messages);
            }).catch((error) => {
                console.log(error)
            });

    }
    render() {
        return (
            <div class="apply_container">
                <div class="apply_title">
                    <div class="apply_title_name">
                        <h1>Let's apply to look for suitable jobs</h1>
                    </div>
                </div>
                <form>
                    <div class="apply_form" >
                        <div class="name_form">
                            <span>Your Name :</span>
                            <input type="text" placeholder="Enter your name" id="name"
                                onChange={this.handleFullNameChange} ref={this.wrapperRef} />
                        </div>
                        <div class="form_error"></div>
                        <div class="cv_form">
                            <span> Your CV :</span>

                            <input type="file" ref={this.applyCVRef}
                                // style={{ display: 'none' }}
                                onChange={this.handleCVChange, this.handleselectedFile}
                                accept=".png,.jpg"
                                id="cv"
                            />
                        </div>
                        <div class="form_error"></div>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    <div style={{marginTop:"-25px", marginBottom:"15px"}}>
                        <span style={{color:"green", paddingTop:"5px", fontSize:"20px", marginLeft:"260px", fontWeight:"bold"}}> {this.state.messages.message} </span>
=======
                    <div>
                        <span>{this.state.messages.message}</span>
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78
=======
                    <div>
                        <span>{this.state.messages.message}</span>
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78
=======
                    <div>
                        <span>{this.state.messages.message}</span>
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78
=======
                    <div>
                        <span>{this.state.messages.message}</span>
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78
=======
                    <div>
                        <span>{this.state.messages.message}</span>
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78
=======
                    <div>
                        <span>{this.state.messages.message}</span>
>>>>>>> 7901737a4306199e3b0dfe79e1a0e6ab98074c78
                    </div>
                    <div class="sendCv_button">
                        <button class="cv_button" type="submit" onClick={this.handleApply}>
                            <span>Send your CV</span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};
export default Apply;