import React, { Component } from 'react'
import cookie from 'react-cookies'
global.value=""
class First extends Component {
    constructor(props) {
        super(props);
        this.state = { index: "" };
    }
    render() {

        return (
            <div>
                <button onClick={() => {
                    global.value +="long";
                    cookie.save("id", global.value, { path: "/" })
                }}>oke</button>
            </div>
        )
    }
}
export default First;
