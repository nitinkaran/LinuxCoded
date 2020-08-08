import { addTodo, filter, toggle } from "./Redux/Actions";
import { getFilteredValues } from "./Redux/todoSelector";

export const mapStateToProps = (state) => {
    const { visibilityFilter } = state;
    const todoArray = getFilteredValues(state, visibilityFilter);
    return {
        visibilityFilter,
        todoArray
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text));
        },

        filter : (value) => {
            dispatch(filter(value));
        },

        toggle : (id) => {
            dispatch(toggle(id));
        }
    }
};
