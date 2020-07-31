import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";

const initialState = VISIBILITY_FILTERS.ALL;
export default function(state = initialState, action) {
    switch(action.type) {
        case SET_FILTER : {
            const { filter } = action.payload
            return filter;
        };
        default : {
            return state;
        }
    }
} 