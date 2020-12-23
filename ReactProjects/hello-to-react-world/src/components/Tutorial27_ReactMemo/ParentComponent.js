import React, { Component } from 'react';
import ReactMemoEx from './ReactMemoEx';

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
        return (
            <div>
                <h3>In parent component : {this.state.name}</h3>
                <ReactMemoEx name = {this.state.name} />
            </div>
        );
    }
}

export default ParentComponent;