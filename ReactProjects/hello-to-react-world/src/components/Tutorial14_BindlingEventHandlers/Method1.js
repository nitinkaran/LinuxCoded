import React, { Component } from 'react';

class Method1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Method 1 Handler'
        }
    }
    
    clickHandler() {
        this.setState({
            message: "Bind in the render method"
        });
        console.log(this);
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)} >Method1</button>
            </div>
        );
    }
}

export default Method1;