import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Redirect } from "react-router"
import Second from "./second"
import ReactDOM from 'react-dom';
class First extends Component {
    constructor(props) {
        super(props);
        this.state = { index: "" };
    }
    checkValid =() =>{
        if(document.getElementById("text1").value!==""){
            this.props.history.push("/second");
        }
    }
    render() {

        return (
            <div>
                <input id="text1" type="text"></input>
                <button onClick={() => this.checkValid()}>oke</button>
            </div>
        )
    }
}
export default First;