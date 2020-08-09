import React from "react";

const getClass = (item) => {
    return item.completed === true ? '-ticked' : '';
};

const Todo = ({item, toggle, deleteTodo}) => {
    return (
        <div className="todo-item" >
            <span className="emoji">
                {item.completed? '    😎     ' : '    🤾     ' }
            </span>
            <span className={`listed-item${getClass(item)}`} onClick={() => {toggle(item.id)}} >
                {item.message}
            </span>
            <span className="deleteSpan" onClick={() => {deleteTodo(item.id)}}>
                {'❌'}
            </span>
        </div>
    );
};

export default Todo;