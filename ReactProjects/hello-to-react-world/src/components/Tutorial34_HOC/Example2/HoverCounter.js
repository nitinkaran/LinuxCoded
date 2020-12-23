import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class HoverCounter extends Component {

    render() {
        const {count, incrementCount, focus} = this.props;
        return (
            <div>
                <h1 onMouseOver={incrementCount} onFocus={focus} > HOVERED {count} times </h1>
            </div>
        );
    }
}

export default UpdatedComponent(HoverCounter);