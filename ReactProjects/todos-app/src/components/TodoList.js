import React from 'react';
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import Todo from "./Todo";
const TodoList = ({ todos }) => {
    return (
        <ul className="show-todos">
            {
                todos && todos.length ? 
                todos.map((item, index) => {
                    return <Todo key={index} item={item} />    
                })
                :
                "Hurray!!! No Todos Yet..."
            }
        </ul>
    );
};

const mapStateToProps = (state) => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
};

export default connect(mapStateToProps)(TodoList);