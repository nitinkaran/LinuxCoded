import { createStore } from "redux";
import rootReducers from "./reducers";

export default createStore(
    rootReducers,
    window.devToolsExtension ? window.devToolsExtension() : f => f
);