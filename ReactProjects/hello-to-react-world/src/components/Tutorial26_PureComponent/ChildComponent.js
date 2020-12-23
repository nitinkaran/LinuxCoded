import React, { Component } from 'react';

class ChildComponent extends Component {

    render() {
        // console.log("CHILD COMPONENT");
        return (
            <div>
                CHILD COMP : {this.props.name}                
            </div>
        );
    }
}

export default ChildComponent;