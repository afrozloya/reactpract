import React, {Component} from 'react'

export default class App25b extends Component {
    constructor(){
        super()
        this.state={}
        console.log("constructor...............................")
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps................................")
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount................................")
    }

    componentDidCatch(){
        console.log("componentDidCatch................................")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate................................")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount................................")
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate................................")
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate................................")
        return nextProps.isLoading !== this.props.isLoading;
    }


    render(){
        console.log("render................................")
        return (
            <div>
            {this.props.isLoading ? <h1>Loading.....</h1>:<h1>Done!</h1>}
            <button onClick={this.props.toggleLoading}>Clk Me</button>
            </div>
        )    
    }
}
