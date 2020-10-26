import React, { Component } from 'react';
import {connect} from 'react-redux';
import _isEmpty from 'lodash/isEmpty';

// import ImageLocation from "../../ImageLocation";
// import history from '../../../../Redux/history';
import { mapStateToProps, mapDispatchToProps} from '../../../Ecom.connect';
import FrontendApi from '../../../../Api/FrontendApi';
import CartItems from './CartItems';

class Cart extends Component {

    componentDidMount() {
        const { products={}, saveCartItem, saveShoppingCart, CartStore={} } = this.props;
        const { productByIdResponse } = products;
        const { Cart={} } = CartStore;

        FrontendApi.createCartItem(productByIdResponse)
        .then(response => {
            const newCartItem = response.data;
            saveCartItem(newCartItem);
            
            if(_isEmpty(Cart)) {
                FrontendApi.createShoppingCart(newCartItem)
                .then(res => {
                    saveShoppingCart(res.data);
                });
            } else {
                FrontendApi.addCartItemToShoppingCart(newCartItem, Cart.shoppingCartId)
                .then(res => {
                    saveShoppingCart(res.data);
                });
            }
        });
    }

    render() {

        const { CartStore={} } = this.props;
        const { Cart={} } = CartStore;

        if (_isEmpty(Cart)) {
            return null;
        }

        return (
            <CartItems Cart={Cart} />
        );
    } 
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);