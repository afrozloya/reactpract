import React, {Component} from 'react'

export default class App26a extends Component {
    onClickHandler =() => {
        console.log("lamba chaura code to decide login....")
        this.props.onToggle()
    }
    render(){
        // console.log(this.props)
        return (
            <div>
                <button onClick={this.onClickHandler}>Login Toggle</button>
            </div>
        )    
    }
 }
