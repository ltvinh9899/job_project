import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

class Second extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){}
  render() {
    console.log("propsSecond:", this.props);
    return (
      <div>
        <h1> Home Page</h1>
        <Link to="/back" onClick={() => {this.props.history.goBack()}}>
          Back
        </Link>
            
      </div>
    );
  }
}
export default Second;
