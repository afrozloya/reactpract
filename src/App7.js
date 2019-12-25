import React, {Component} from 'react'
import Errors from './Errors2'

export default class App6 extends Component{
    state = {
        uname: '',
        age: '',
        errors: {}
    }

    onInputChange = (e) => {
        const {name, value} = e.target;
        let checkNameRegex, emsg;
        let errors;
        switch(name){
            case 'uname':
                checkNameRegex = /^[a-zA-Z ]*$/
                emsg = checkNameRegex.test(value)? null:'Name should only contain alfa....';
                errors = {
                    ...this.state.errors,
                    uname: emsg
                }
                break;
            case 'age':
                     checkNameRegex = /^[0-9]*$/
                     emsg = checkNameRegex.test(value)? null:'Age should only contain digits....';
                     errors = {
                        ...this.state.errors,
                        age: emsg
                    }
                    }
        // console.log(this.state.errors)
        this.setState({
            errors : errors
        })                 
        this.setState({
            [name]: value
        })
    }
    onClickHandler = () => {
        console.log(this.state)
    }
    render(){
        return (
            <div>
            <input  name="uname" value={this.state.uname} onChange={this.onInputChange} />
            <input name="age" value={this.state.age} onChange={this.onInputChange} />
            <Errors errors = {this.state.errors} />
            <button onClick={this.onClickHandler}>Clk Me</button>
            </div>  
        )
    }
}
