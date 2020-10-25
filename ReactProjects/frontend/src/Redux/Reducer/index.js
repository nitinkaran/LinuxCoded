import { combineReducers } from 'redux';
import productGroup from './productGroupReducer';
import products from './productsReducer'
import CartStore from './cartReducer';

export default combineReducers({
    productGroup,
    products,
    CartStore
});