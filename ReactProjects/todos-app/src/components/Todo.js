import React from 'react';
import { toggleTodo } from "../redux/actions";
import { connect } from "react-redux";

const checkStatus = (item) => {
    const { completed } = item;
    return completed ? '-striked' : '';
};

const Todo = ({item, toggleTodo}) => {
    if (item === false) {
        return;
    }
    return (
        <div className="todo-item">            
            <li onClick={()=>toggleTodo(item.id)} >
                {item.completed? '    😎     ' : '    🤾     ' }
                <span className={`single-item${checkStatus(item)}`}>
                    {item.content}
                </span>
            </li>
        </div>
    );
};

export default connect(null, { toggleTodo })(Todo);