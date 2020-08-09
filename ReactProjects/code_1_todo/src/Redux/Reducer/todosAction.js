import { ADD, TOGGLE, DELETE } from "../../ActionTypes";

let initialState = {
    todo_items : {}
};

export default function (state=initialState, action) {
    const { type, payload={} } = action;
    const { id, message } = payload;
    switch(type) {
        case ADD : return {
            ...state,
            todo_items : {
                ...state.todo_items,
                [id] : {
                    message,
                    completed : false
                }
            }
        };
        case TOGGLE : return {
            ...state,
            todo_items : {
                ...state.todo_items,
                [id] : {
                    ...state.todo_items[id],
                    completed : !state.todo_items[id].completed
                }
            }
        };
        case DELETE : {
                delete state.todo_items[id];
                return {
                ...state,
                todo_items : {
                    ...state.todo_items    
                }
            };
        }
        default  : return state;
    }
}