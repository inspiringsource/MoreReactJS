import React, { Component } from 'react'

export default class Counter extends Component {
    

    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount
        };
    }


    increment = () => {
        // console.log("button clicked");
        // console.log(this.state);
        this.setState({
            count: this.state.count + 1
        })
    }
    
    decrement = () => {
        // console.log("button clicked");
        // console.log(this.state);
        this.setState({
            count: this.state.count - 1
        })
    }
    
    render() {
        return (
            <div>
                <div>count: {this.state.count}</div>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}
