import React from "react";

const getClass = (item) => {
    return item.completed === true ? '-ticked' : '';
};

const Todo = ({item, toggle}) => {
    return (
        <div className="todo-item" >
            <div  onClick={()=>toggle(item.id)}>
                <span className="emoji">
                    {item.completed? '    😎     ' : '    🤾     ' }
                </span>
                <span className={`listed-item${getClass(item)}`}>
                    {item.message}
                </span>
            </div>
        </div>
    );
};


export default Todo;