import React, { Component } from 'react';

class Method3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Method 3 Handler'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler() {
        this.setState({
            message: "Method is bind in the constructor method and official method"
        });
        console.log(this);
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler} >Method3</button>
            </div>
        );
    }
}

export default Method3;