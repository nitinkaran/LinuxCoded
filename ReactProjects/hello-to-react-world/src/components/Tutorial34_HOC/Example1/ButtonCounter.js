import React, { Component } from 'react';

class ButtonCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState( prevState => {
            return {count: prevState.count + 1}
        });
    }

    render() {
        let count = this.state.count;
        return (
            <div>
                <button onClick={this.incrementCount}>Click {count} times</button>
            </div>
        );
    }
}

export default ButtonCounter;