import React, { Component } from "react";
class Second extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
     <div>
       <div id="message_login" style={{fontSize:"15px"}}>{global.value}</div>
     </div>
    );
  }
}
export default Second;
