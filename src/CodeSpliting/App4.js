import React, { Component, Suspense } from 'react'
const App2 = React.lazy(()=>import('./App2'))
// const App2 = loadable(() => import('./App2'))



export default class App extends Component {
    state = {
        show2: false
    }
    render() {
        let out = <h2>Dont show</h2>
        if(this.state.show2){
            out = <Suspense fallback={<h1>Loading</h1>}>
            <App2 />
            </Suspense>
        
        }
        return (
            <div>
                {out}
                <button onClick={()=>{this.setState({show2: true})}}>Clk Me</button>
            </div>
        )
    }
}
