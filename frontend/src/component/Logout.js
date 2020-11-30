import React, { Component } from 'react';
import './Logout.css';
import { BrowserRoute, BrowserRouter, Link, Route } from 'react-router-dom';
import cookies from 'react-cookies'

class Logout extends Component {
    child_closeModal() {
        this.props.parentMethod();
    }
    render() {
        return (
            <div class="logout_page_screen">
               <div >
                   <div  class="logout_page_screen_notifycation">
                       <p>Log out</p>
                   </div>
                   <div  class="logout_page_content">
                       <p>Do you want to log out website?</p>
                   </div>
                   <div  class="logout_page_button">
                       <div class="button_cancel" onClick={ () => this.child_closeModal()}>Cancel</div>
                      <Link class="text_link" to="/" style={{textDecoration:"none", color:"black"}}><div class="button_oke" >Oke</div></Link>
                   </div>
               </div>
            </div>
        )
    }
}

export default Logout;