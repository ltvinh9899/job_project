import React, { Component } from 'react'
class First extends Component {
    constructor(props) {
        super(props);
        this.state = { index: "" };
    }
    checkValid =() =>{
        if(document.getElementById("text1").value!==""){

            this.props.history.push("/second");
            window.value= "lol"

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
