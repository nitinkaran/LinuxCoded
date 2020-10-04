import { createStore } from 'redux';
import rootReducer from './Reducer';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import { routerMiddleware } from 'react-router-redux'
// import createHistory from 'history/createBrowserHistory';

// export const history = createHistory();

// // Build the middleware for intercepting and dispatching navigation actions
// const myRouterMiddleware = routerMiddleware(history);

// const getMiddleware = () => {
//     return applyMiddleware(myRouterMiddleware);
// };

export const store =  createStore(
    rootReducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f
    // composeWithDevTools()
);