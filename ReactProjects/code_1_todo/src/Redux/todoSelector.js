import _isEmpty from "lodash/isEmpty";
import {VISIBILITY_FILTER} from "../VisibilityFilter";

const getTodos = (store={}) => {
    return (!_isEmpty(store)) && store.todo_items;
};

const getMappedArray = (todos) => {
    return Object.keys(todos).map(item => {
        return {
            ...todos[item],
            id: item
        }
    });
};

const getFilteredTodoValues = (todos) => {
    const value = getTodos(todos);
    return (!_isEmpty(value)) ? getMappedArray(value): [];
};

export const getFilteredValues = (store={}, filter) => {
    const {todos} = store;
    const todoArray = getFilteredTodoValues(todos);
    switch(filter) {        
        case VISIBILITY_FILTER.COMPLETED : return todoArray.filter(item => {return item.completed === true});
        case VISIBILITY_FILTER.INCOMPLETE : return todoArray.filter(item => {return item.completed === false});
        case VISIBILITY_FILTER.ALL : 
        default : return todoArray;
    }
 };