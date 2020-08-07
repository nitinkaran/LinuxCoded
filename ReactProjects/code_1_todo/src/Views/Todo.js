import React from "react";
import { connect } from "react-redux";
import { toggle } from "../Redux/Actions";

const getClass = (item) => {
    return item.completed === true ? '-ticked' : '';
};

const Todo = ({item, toggle}) => {
    return (
        <div className="todo-item" >
            <li  onClick={()=>toggle(item.id)}>
                <span className={`listed-item${getClass(item)}`}>
                    {item.message}
                </span>
            </li>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggle : (id) => {
            dispatch(toggle(id));
        }
    }
};

export default connect(null, mapDispatchToProps)(Todo);