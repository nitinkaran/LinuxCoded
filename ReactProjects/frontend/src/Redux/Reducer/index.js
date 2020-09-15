import { combineReducers } from 'redux';
import productGroupActions from './productGroupActions';
import productsActions from './productsActions'

export default combineReducers({
    productGroupActions,
    productsActions
});