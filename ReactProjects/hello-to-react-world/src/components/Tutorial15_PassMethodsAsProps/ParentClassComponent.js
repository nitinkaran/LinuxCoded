import React, { Component } from 'react';
import ChildFunctionalComponent from './ChildFunctionalComponent'

class ParentClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'This is the message in the parent class component'
        }

        this.returnToparent = this.returnToparent.bind(this);
    }
    
    returnToparent(childMessage) {
        this.setState({
            message: `${childMessage}`
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <ChildFunctionalComponent messageToParent={this.returnToparent} />
            </div>
        );
    }
}

export default ParentClassComponent;