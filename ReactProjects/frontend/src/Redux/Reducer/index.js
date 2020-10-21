import { combineReducers } from 'redux';
import productGroup from './productGroupReducer';
import products from './productsReducer'

export default combineReducers({
    productGroup,
    products
});