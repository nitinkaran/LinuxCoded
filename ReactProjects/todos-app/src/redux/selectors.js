import { VISIBILITY_FILTERS } from "../constants";

export const getTodosState = (store) => {
    return store && store.todos;
};

export const getTodoList = (store) => {
    return getTodosState(store) ? getTodosState(store).allIds : [];
};

export const getTodosById = (store, id) => {
    return getTodoList(store).length > 0 ? {...getTodosState(store).byIds[id], id} : {};
};

export const getTodos = (store) => {
    const list = getTodoList(store);
    return list && list.length > 0 ? list.map(id => getTodosById(store, id)) : [];
};

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store);
    switch(visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED : return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE : return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL : 
        default:
            return allTodos;
    }
};