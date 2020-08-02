import React, {Component} from 'react';
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleInputBox = this.handleInputBox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputBox(event) {
        event.preventDefault();
        this.setState({
            message: event.target.value
        });
    }

    handleSubmit() {
        this.props.addTodo(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div className="addtodo">
                <h3>Your todo list</h3>
                <input 
                    type="text"
                    className="input-box"
                    placeholder="Enter text..."
                    onChange={this.handleInputBox}
                    value={this.state.message}
                />
                <button
                    className="button"
                    onClick={this.handleSubmit}
                >
                    ADD
                </button>
            </div>
        );
    }
}

/**
 * 
 * @param {*} dispatch 
 * This code also works just that its not dispatching action deliberatedly,
 * instead we are just calling the action creator
 */
// export default connect(
//     null,
//     {addTodo}
// )(AddTodo); 


/**
 * check the code and find the reason of dispatch and action
 */
const mapDispatchToProps = (dispatch) => {  
    return {
        addTodo : (text) => {
            dispatch(addTodo(text));
        }
    };
};

export default connect(null, mapDispatchToProps)(AddTodo);