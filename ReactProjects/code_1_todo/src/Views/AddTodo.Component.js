import React, { Component } from 'react';
import { connect } from "react-redux";
import _bindAll from 'lodash/bindAll';
import { addTodo } from "../Redux/Actions";

class AddTodoComponent extends Component {
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
                    value={this.state.message}
                    onChange={this.updateMessage}
                />
                <button
                    className="button"
                    onClick={this.handleClick}
                >
                    ADD
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text));
        }
    }
};

export default connect (null, mapDispatchToProps)(AddTodoComponent);