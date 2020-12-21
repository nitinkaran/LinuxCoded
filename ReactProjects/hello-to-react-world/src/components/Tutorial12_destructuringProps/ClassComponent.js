import React, { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return (
            <div>
                We are in {this.props.name} {this.props.value}
            </div>
        );
    }
}

export default ClassComponent;