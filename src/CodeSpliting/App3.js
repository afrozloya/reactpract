import React, { Component } from 'react'


export default class App extends Component {
    state = {
        show2: false
    }
    render() {
        let out = <h1>Loading.......</h1>
        if(this.state.show2){
            import('./App2').then(App2 => {
                out = <App2 />
            })
        }
        return (
            <div>
                {out}
                <button onClick={()=>{this.setState({show2: true})}}>Clk Me</button>
            </div>
        )
    }
}
