import React, { Component } from 'react'

export default class App4 extends Component {        
    // myref = React.createRef("myref");
    clicked = (e) => {
        // console.log(this.refs.kk.value)
        // console.log(this.myref.current.value)
        console.log(this.myref2.value)
    }
    render() {        
        return (
            <div>
                {/* <input ref="kk" name="uname" /> */}
                {/* <input ref={this.myref} name="uname" /> */}
                <input ref={(ref)=>{this.myref2 = ref}} name="uname" />
                <button onClick={this.clicked}>Saubmit</button>
            </div>
        )
    }
}
