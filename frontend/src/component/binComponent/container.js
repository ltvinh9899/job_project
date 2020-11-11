import React, { Component } from 'react'
import { BrowserRouter, Route, Link , Switch} from "react-router-dom";
import Second from "./second"
import First from "./first"
class Container extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log("propsContainer:", this.props)
        return (
                <Switch>
                    <Route path="/back" component={First}  /> 
                    <Route path="/second" component={Second}  /> 
                </Switch>
        )
    }
}
export default Container;