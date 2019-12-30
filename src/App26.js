import React, { Component } from 'react'
import App26a from './App26a'
import App26b from './App26b'


export default class componentName extends Component {
    state= {
        isLogin: false,
    }
    onToggleHAndler =()=> {
        this.setState((prevState) => {
            return {
                isLogin: !prevState.isLogin,
            }
        })
    }
    render() {
        return (
            <div>
                <App26b  isLogin={this.state.isLogin} />
                <App26a onToggle={this.onToggleHAndler} />
            </div>
        )
    }
}
