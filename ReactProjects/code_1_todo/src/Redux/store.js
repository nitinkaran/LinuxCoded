import { createStore } from "redux";
import rootReducer from "./Reducer";

export default createStore(
    rootReducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f
);