import React from "react";
import AddTodoComponent from '../Views/AddTodo.Component';
import TodoList from "../Views/TodoList";
import Filters from "../Views/Filters";

const TodoAppMainView = ({
    AddProps,
    FilterProps,
    TodoProps,
    TodoListProps,
    DeleteTodoProps
}) => {
    return (
        <div className="todo-main-view">
            <div className="todo-title">Add Todos !!! </div>
            <Filters {...FilterProps} />
            <AddTodoComponent {...AddProps} />
            <TodoList {...TodoListProps} TodoProps={TodoProps} />            
        </div>
    );
};

export default TodoAppMainView;