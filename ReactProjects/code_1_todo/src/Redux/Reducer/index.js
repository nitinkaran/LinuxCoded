import { combineReducers } from "redux";
import todos from "./todosAction";
import visibilityFilter from "./filteredActions";

export default combineReducers({todos, visibilityFilter});