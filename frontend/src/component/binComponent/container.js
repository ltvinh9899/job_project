import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TiTick } from "react-icons/ti"
import axios from "axios";
import { BrowserRoute, BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import First from './first'
import Second from './second'
class Container extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={First} exact />
                    <Route path="/second" component={Second} exact />
                </Switch>
            </BrowserRouter>

        )
    }
}

export default Container; 