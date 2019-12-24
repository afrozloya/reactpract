import React, { Component } from 'react'

export default class componentName extends Component {
    state = {
        loginStatus:false,
        kk: 'kuchbhi'
    }
    // clicked=(e)=>{
    //     this.setState({
    //         loginStatus: !this.state.loginStatus
    //     })
    // }
    clicked=(e)=>{
        this.setState((prevState)=>{
            return (
                {
                loginStatus: !prevState.loginStatus
            }
            )
        })
    }

    render() {
        let btnLabel = this.state.loginStatus ? "Logout" : "Login";
        return (
            <div>
                {this.state.kk}
                { this.state.loginStatus ? <h1>Logout</h1> : <h1>Login</h1>}    <button onClick={this.clicked}>{btnLabel}</button>              <button onClick={this.clicked}>{this.state.loginStatus ? "Logout" : "Login"}</button>                                
            </div>
        )
    }
}
