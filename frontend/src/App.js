import React from 'react';
import Modals from './component/Modal'
import Login from './component/Login'
import Java from './component/JobComponent/Java'
import Welcome from './component/Welcome';
import logo from './logo.svg';
import './App.css';
import CompanyList from './component/CompanyComponent/CompanyList'
import Viettel from './component/CompanyComponent/Viettel'
import FPT from './component/CompanyComponent/FPT'
import VNG from './component/CompanyComponent/VNG'
import VNPT from './component/CompanyComponent/VNPT'
import Misa from './component/CompanyComponent/Misa'
import Sun from './component/CompanyComponent/Sun'
import Hybrid from './component/CompanyComponent/Hybrid'
import Lg from './component/CompanyComponent/Lg'
import Toshiba from './component/CompanyComponent/Toshiba'
import KMS from './component/CompanyComponent/KMS'
import Error from './component/error_search'
import Logout from './component/Logout'
import ViettelJob_tester from './component/Jobs/ViettelJob/ViettelJob_tester'
import Apply from './component/Jobs/Apply'
import { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import First from './component/binComponent/first'
import Second from './component/binComponent/second'

import Container from './component/binComponent/container'

import Job_list from './component/JobComponent/Job_list'

class App extends Component {
    render() {
           return (
            <BrowserRouter>
                <Route path="/" component={Welcome} exact />
                <Route path="/java" component={Java} exact />
                <Route path="/Company_List" component={CompanyList} exact />
                <Route path="/Viettel_tester" component={ViettelJob_tester} exact />
                <Route path="/Viettel" component={Viettel} exact />
                <Route path="/VNG" component={VNG} exact />
                <Route path="/FPT" component={FPT} exact />
                <Route path="/VNPT" component={VNPT} exact />
                <Route path="/Misa" component={Misa} exact />
                <Route path="/Sun" component={Sun} exact />
                <Route path="/Hybrid" component={Hybrid} exact />
                <Route path="/LG" component={Lg} exact />
                <Route path="/Toshiba" component={Toshiba} exact />
                <Route path="/KMS" component={KMS} exact />
                <Route path="/error" component={Error} exact />
                <Route path="/company/:id" component={FPT}/>
                <Route path="/job-detail/:id" component={ViettelJob_tester}/>
                <Route path="/job-list-follow-type/:id" component={Java}/>
                <Route path="/job-list" component={Job_list}/>
            </BrowserRouter>
        )   
       
      
    }
}

export default App;
