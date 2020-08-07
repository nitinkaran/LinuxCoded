import React from "react";
import { connect } from "react-redux";
import _isEmpty from "lodash/isEmpty";
import { getFilteredValues } from "../Redux/todoSelector";
import Todo from "./Todo";

const TodoList = ({todoArray}) => {
    return (
        <ul className="todo-list">
            {
                _isEmpty(todoArray) ? 'Hurray !! No Todos !!!!' :
                todoArray.map((item, index) => {
                    return <Todo item={item} key={index} />
                })
            }
        </ul>
    );
};

const mapStateToProps = (state) => {
    const { visibilityFilter: filter } = state;
    const todoArray = getFilteredValues(state, filter);
    return {
        todoArray
    };
};

export default connect(mapStateToProps, null)(TodoList);