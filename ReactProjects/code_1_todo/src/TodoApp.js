import React, { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./Todo.connect";
import propsProvider from "./Todo.propsProvider";
import TodoAppMainView from "./Views/TodoApp.MainView";

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.propsProvider = new propsProvider(this.props);
    }

    render() {
        return (
            <div className="a-todo-app">
                <TodoAppMainView {...this.propsProvider.getComponentProps(this.props)} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);