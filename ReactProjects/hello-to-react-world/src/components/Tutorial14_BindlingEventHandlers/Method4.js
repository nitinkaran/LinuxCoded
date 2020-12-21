import React, { Component } from 'react';

class Method4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Method 4 Handler'
        }
    }
    
    clickHandler = () => {        
        this.setState({
            message: 'Arrow function method'
        },
        ()=> {
            console.log(this);
        }
        );        
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler} >Method4</button>
            </div>
        );
    }
}

export default Method4;