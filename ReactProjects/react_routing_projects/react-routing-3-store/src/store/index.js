import { createStore } from "redux";
import ReduxStore from './ReduxStore';

const reduxStore = createStore(
    ReduxStore,
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default reduxStore;