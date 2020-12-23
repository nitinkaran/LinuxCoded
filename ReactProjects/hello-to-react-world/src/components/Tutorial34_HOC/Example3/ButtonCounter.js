import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class ButtonCounter extends Component {

    render() {
        const {count, incrementCount, value} = this.props;
        return (
            <div>
                <button onClick={incrementCount}>Click {count} times with {value}</button>           
            </div>
        );
    }
}

export default UpdatedComponent(ButtonCounter);