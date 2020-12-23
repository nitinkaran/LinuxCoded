import React, { Component } from 'react';
import PureComp from './PureComp';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name: 'ParentComponent'
        };

    }
    
    componentDidMount() {
        setInterval( () => {
            this.setState({
                name: 'ParentComponent'
            })
        } , 1000);        
    }

    render() {
        // console.log("***********Parent Component**************");
        return (
            <div>
                <span>Parent Component</span>
                <ChildComponent name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        );
    }
}

export default ParentComponent;