import { ADD, TOGGLE, FILTER } from '../ActionTypes';

let currentId = 1;

export const addTodo = (text) => {
    return {
        type : ADD,
        payload : {
            id : currentId++ ,
            message : text
        }
    };
};

export const toggle = (id) => {
    return {    
        type : TOGGLE,
        payload : {
            id
        }
    }
};

export const filter = (filterType) => {    
    return {
        type : FILTER,
        payload : {
            filterType
        }
    }
};