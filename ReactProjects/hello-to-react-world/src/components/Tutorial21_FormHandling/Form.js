import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: ''
        };
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    
    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleAddress = (event) => {
        this.setState({
            address: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${this.state.name} `);
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div> Name1 : <input type="text" value={this.state.name} onChange={this.handleName}/> </div>
                <div> Email : <input type="text" value={this.state.email} onChange={this.handleEmail}/> </div>
                <div> Addr1 : <input type="text" value={this.state.address} onChange={this.handleAddress}/> </div>
                <button >Submit</button>
            </form>
        );
    }
}

export default Form;