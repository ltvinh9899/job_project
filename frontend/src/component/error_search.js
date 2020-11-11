import React,{Component} from "react"
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';

class Error extends Component{
    render(){
        return(
            <div >
                <img style={{width:"200px", height:"200px", marginTop:"10%", marginLeft:"40%"}}src="https://icons-for-free.com/download-icon-face+sad+smiley+icon-1320183582392064872_512.png"></img>
                <h1 style={{color:"red", marginLeft:"43%", fontSize:"40px"}}>Opps!</h1>
                <p style={{fontSize:"25px", color:"white", marginLeft:"32%", display:"inline"}}>The word you're looking for doesn't exist</p>
                <div style={{ display:"inline",color:"red", marginLeft:"2%", fontSize:"25px"}}><Link style={{textDecoration:"none",color:"red"}}to="/">Return</Link></div>
            </div>
        )
    }
}
export default Error;