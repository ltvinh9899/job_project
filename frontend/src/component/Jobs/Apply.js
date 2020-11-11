import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';
import multiply from "./ViettelJob/image/multiply.png"
import "./apply.css"
import axios from "axios"

class Apply extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.myRef=React.createRef();
        this.state = {
            selectedFileName: "",
            buttonName: "Select your CV",
            full_name: '',
            cv: '',
            id_user: 0,
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
   /*  errorForm() {
        if (document.getElementById('name').value == "") return "invalid name" 
        if (document.getElementById('cv').value == "") return "invalid cv" 
        if (document.getElementById('cv').value == ""&&document.getElementById('cv').value == "") return "invalid cv and name" 
    } */
    check_form() {
        if (document.getElementById('name').value == "") {
            const element = <div>
                <img class="multiply_icons" src={multiply}></img>
                <p>can't be blank</p>
            </div>;
            ReactDOM.render(element, document.getElementsByClassName('form_error')[0]);
        }
        if (document.getElementById('cv').value == "") {
            const element = <div>
                <img class="multiply_icons" src={multiply}></img>
                <p>can't be blank</p>
            </div>;
            ReactDOM.render(element, document.getElementsByClassName('form_error')[1]);
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

    handleApply = event => {
        event.preventDefault();
        
        var csrftoken = this.getCookie('csrftoken')
        
        const user = {};
        
        this.state.id_user = 7;

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
                'X-CSRFToken':csrftoken,
            }
        })
            .then(res => {
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            });
        
        // axios.get('http://127.0.0.1:8000/user-login/').then(res => {
        //     // handle success
        //     const message = res.data;
        //     this.setState({ message });
        //     console.log(message);
        // })
        //     .catch(error => {
        //         // handle error
        //         console.log(error);
        //     })

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
                        <input type="text" placeholder="Enter your name" id="name" onChange={this.handleFullNameChange} ref={this.wrapperRef} />
                    </div>
                    <div class="form_error"></div>

                    <div class="cv_form">
                        <span>  Your CV :</span>
                        {/* <button onClick={this.handleClick} >
                            <span>{this.state.buttonName}</span>
                        </button> */}
                        <input type="file"
                            ref={this.applyCVRef}
                            // style={{ display: 'none' }}
                            onChange={this.handleCVChange, this.handleselectedFile}
                            accept=".png,.jpg"
                            id="cv"
                        />
                        
                    </div>
                    {/* <button onChange={this.handleselectedFile}>Choose file</button> */}
                    <div class="form_error"></div>

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