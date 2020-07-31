import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from "./components/TodoList";
import VisibilityFilter from "./components/VisibilityFilter";
import './index.css';

const TodoApp = () => {
    return (
        <div className="todo-app">
            <AddTodo />
            <TodoList />
            <VisibilityFilter />
        </div>
    );
};

export default TodoApp;