import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import {Redirect} from "react-router"
import Second from "./second"
import ReactDOM from 'react-dom';


class First extends Component {
    constructor(props) {
        super(props);
        this.state = { index: "" };
    }


    componentDidMount(){

    }
  
   
    render() {
        if(this.state.index === ""){
             return (
                <div>
                <p id="result"></p>
                <input type="text" id="search"></input>
                <button onClick={() => {
                    this.setState({
                        index: document.getElementById("search").value,
                    })
                }}>
                    Oke
                </button>
            </div>
             )
        }
        else{
            return(
                <Redirect to ="/second"/>
            )
        }
       
        /* return (
            <div>
               
                { (this.state.index === "" || this.state.index==="first")  ? 
                <div>
                    <p id="result"></p>
                    <input type="text" id="search"></input>
                    <button onClick={() => {
                        this.setState({
                            index: document.getElementById("search").value,
                        })
                    }}>
                        Oke
                    </button>
                </div>
                : <></> }
                 {this.state.index === "second" ? <Redirect to ="/second"/> : <div></div>} 
             
            </div>
        ); */
    }
}
export default First;