import React, { Component } from 'react'

export default class componentName extends Component {
    state = {
        uname: ''
    }
    clicked = (e) => {
        console.log(this.state.uname)
    }
    render() {
        return (
            <div>
                <input placeholder="Name Please!" onChange={(e)=>{this.setState({uname: e.target.value})}} value={this.state.uname}  name="uname" />
                <button onClick={this.clicked}>Saubmit</button>                
            </div>
        )
    }
}
