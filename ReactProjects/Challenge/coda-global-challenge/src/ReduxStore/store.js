import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import UserReducers from './UsersData/UserReducer';
import ParticipantReducer from './ModifyData/ParticipantReducer';

const rootReducers = combineReducers({
    ParticipantStore : UserReducers,
    Players :ParticipantReducer 
});

const store = createStore(
        rootReducers,
        composeWithDevTools(applyMiddleware(logger))
);

export default store;