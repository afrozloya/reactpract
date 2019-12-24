import React, { Component } from 'react'

export default class App2 extends Component {
    state = {
        loginStatus: false
    }
    constructor(){
        super();
        // this.state = {
        //     loginStatus: false
        // }    
        this.clicked1 = this.clicked1.bind(this);
    }
    clicked1(e){
        console.log('bla bla 1');
        console.log(this)
    }
    clicked2(e){
        console.log('bla bla 2');
        console.log(this)
    }
    clicked3 = (e) => {
        console.log('bla bla 3');
        console.log(this)
    }

    render() {
        return (
            <div>
                {this.state.loginStatus ? <h1>Logout</h1> : <h1>Login</h1>}
                <button onClick={this.clicked1}>Clk Me</button>
                <button onClick={this.clicked2.bind(this)}>Clk Me</button>
                <button onClick={this.clicked3}>Clk Me</button>
            </div>
        )
    }
}
