import { HANDLE_PREV, HANDLE_NEXT } from './ActionConstants';
import history from './history';

const initialState = null;
export default function(state = initialState , action) {

    const { type, payload } = action;

    switch(type) {
        case HANDLE_PREV :
        case HANDLE_NEXT :
            history.push(payload);
            break;        
        default : return state;
    }

    return state;
};