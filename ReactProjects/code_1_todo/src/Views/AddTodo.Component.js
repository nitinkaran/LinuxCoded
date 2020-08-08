import React, { Component } from 'react';
import _bindAll from 'lodash/bindAll';

export default class AddTodoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message : ''
        };

        _bindAll(this, ['handleClick', 'updateMessage']);
    }

    handleClick() {
        this.props.addTodo(this.state.message);
        this.setState({
            message: ''
        });
    }

    updateMessage(event) {
        event.preventDefault();
        const valueMessage = event.target.value;
        this.setState({
            message: valueMessage
        });
    }

    render() {
        return (
            <div className="todo-form">
                <input 
                    type="text"
                    className="input-box"
                    placeholder="Enter Text ..."
                    value={this.state.message}
                    onChange={this.updateMessage}
                />
                <button
                    className="add-button"
                    onClick={this.handleClick}
                >
                    ADD
                </button>
            </div>
        );
    }
}