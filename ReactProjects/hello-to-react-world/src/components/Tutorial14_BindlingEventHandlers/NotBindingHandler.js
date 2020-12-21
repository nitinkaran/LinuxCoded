import React, { Component } from 'react';

/**
 * If Button is clicked then we get the error 
 *              TypeError: Cannot read property 'setState' of undefined
 * Its bcz of the reason the keyword 'this' is undefined in the clickHandler method
 * THere are 4 ways in which even handler is bind
 */

export class NotBindingHandler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello'
        }
    }
    
    clickHandler() {
        console.log("Print this" , this);
        this.setState({
            message: "Does not work"
        });
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler} >NotBindingHandler</button>
            </div>
        );
    }
}