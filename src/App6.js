import React, {Component} from 'react'
import Errors from './Errors'

export default class App6 extends Component{
    state = {
        uname: '',
        age: '',
        errors: []
    }

    remDup(arr){
        return [...new Set(arr)];
    }

    arrayRemove(arr, value) {
        return arr.filter(function(ele){
            return ele != value;
        });
     }

    onInputChange = (e) => {
        const {name, value} = e.target;
        let errors = [...this.state.errors]
        let checkNameRegex, emsg;
        switch(name){
            case 'uname':
                checkNameRegex = /^[a-zA-Z ]*$/
                emsg = checkNameRegex.test(value)? null:'Name should only contain alfa....';
                if(emsg) {
                    errors.push(emsg) 
                } else {
                    errors = this.arrayRemove(errors,'Name should only contain alfa....' )
                }
                break;
            case 'age':
                     checkNameRegex = /^[0-9]*$/
                     emsg = checkNameRegex.test(value)? null:'Age should only contain digits....';
                     if(emsg) {
                        errors.push(emsg) 
                    } else {
                        errors = this.arrayRemove(errors,'Age should only contain digits....' )
                    }
                }
        errors = this.remDup(errors)
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
