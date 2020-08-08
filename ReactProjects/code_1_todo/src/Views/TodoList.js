import React from "react";
import _isEmpty from "lodash/isEmpty";
import Todo from "./Todo";

const TodoList = ({todoArray, TodoProps}) => {
    return (
        <div className="parent-todo-list">            
            {
                _isEmpty(todoArray) &&
                <span className="happy-message">
                    'Hurray !! No Todos !!!!'
                </span>
            } 
            <ul className="todo-list">
                {
                    todoArray.map((item, index) => {
                        return <Todo item={item} key={index} {...TodoProps} />
                    })
                }
            </ul>           
        </div>
    );
};

export default TodoList;