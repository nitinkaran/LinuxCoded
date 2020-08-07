import {VISIBILITY_FILTER} from "../../VisibilityFilter";
import { FILTER } from "../../ActionTypes";

let defaultFilter = VISIBILITY_FILTER.ALL;

export default function (state=defaultFilter, action) {
    const {type, payload} = action;
    switch( type ) {
        case FILTER : return payload.filterType;
        default : return state;
    }

}