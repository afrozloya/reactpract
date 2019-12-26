import React, {Component} from 'react'
import Errors from './Errors3'
import {validateField, isFormValid} from './validationUtils'
import './validations.css' 

export default class App6 extends Component{
    state = {
        formfields: {
            uname: {
                value: '',
                error: null,
                touched: false,
                validations: {
                    isName: true,
                    min: 3
                }
            },
            age: {
                value: '',
                error: null,
                touched: false,
                validations: {
                    isNumeric: true,
                }
            }
        },
        isFormValid:true
    }

    onInputChange = (e) => {
        const {name, value} = e.target;
        let emsg = validateField(this, name, value)
        this.setState({            
            formfields: {
                ...this.state.formfields,
                [name]: {
                    ...this.state.formfields[name],
                    value: value,
                    error: emsg
                }    
            }
        })
        this.setState( (prevState) => {
            let isFValid = isFormValid(prevState);
            return {
                isFormValid: isFValid
            }
        })
    }
    onClickHandler = () => {
        console.log(this.state)
    }
    render(){

        let err = {
            outlineColor: 'red',
            backgroundColor: 'pink',
        }

        return (
            <div>
            <input style={this.state.formfields.uname.error?err:null} name="uname" value={this.state.formfields.uname.value} onChange={this.onInputChange} />
            <Errors field={this.state.formfields.uname} />
            <input className={this.state.formfields.age.error?'error':null} name="age" value={this.state.formfields.age.value} onChange={this.onInputChange} />
            <Errors field={this.state.formfields.age} />
            <button disabled={!this.state.isFormValid} onClick={this.onClickHandler}>Clk Me</button>
            </div>  
        )
    }
}
