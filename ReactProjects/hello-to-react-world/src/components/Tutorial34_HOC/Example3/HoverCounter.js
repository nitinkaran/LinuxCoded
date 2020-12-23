import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class HoverCounter extends Component {

    render() {
        const {count, incrementCount, focus, value} = this.props;
        return (
            <div>
                <h1 onMouseOver={incrementCount} onFocus={focus} > HOVERED {count} times
                    <h3>Passed Props = {value}{count} </h3>
                </h1>
            </div>
        );
    }
}

export default UpdatedComponent(HoverCounter);