import React, { Component } from 'react'
import App25b from './App25b'

export default class componentName extends Component {
    state = {
        isLoading: true,
        abc: true,
        showChild: true
    }
    toggleLoading = () => {
        this.setState((prevState)=>{
            return {
                isLoading: ! prevState.isLoading
                // abc: ! prevState.abc
            }
        })
    }

    hataoBtnHAndler = () => {
        this.setState({
            showChild: false,
        })
    }

    constructor(){
        super();
        console.log("const of App25......")
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps of App25")
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount of App25")
    }

    componentDidCatch(){
        console.log("componentDidCatch of App25")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate of App25")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount of App25")
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate of App25")
        return null;
    }


    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate of App25")
        return true;
    }

    render() {
        console.log("render of App25....")
        return (
            <div>
                { this.state.showChild ? <App25b toggleLoading={this.toggleLoading} isLoading={this.state.isLoading}/> : null }
                <button onClick={this.hataoBtnHAndler}>Hatao</button>
            </div>
        )
    }
}
