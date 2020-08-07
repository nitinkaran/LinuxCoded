import React from "react";
import AddTodoComponent from './Views/AddTodo.Component';
import TodoList from "./Views/TodoList";
import Filters from "./Views/Filters";

const TodoApp = () => {
    return (
        <div className="a-todo-app">
            <div className="todo-title">Add Todos !!! </div>
            <AddTodoComponent />
            <TodoList />
            <Filters />
        </div>
    );
}

export default TodoApp;