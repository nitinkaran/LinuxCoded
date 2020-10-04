import { combineReducers } from 'redux';
import productGroup from './productGroupActions';
import products from './productsActions'

export default combineReducers({
    productGroup,
    products
});