import React, { Component } from 'react'
import App2 from './App2'


export default class App extends Component {
    state = {
        show2: false
    }
    render() {
        return (
            <div>
                {this.state.show2 && <App2 />}
                <button onClick={()=>{this.setState({show2: true})}}>Clk Me</button>
            </div>
        )
    }
}
