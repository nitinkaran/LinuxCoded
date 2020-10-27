import React, { Component } from 'react';
import {connect} from 'react-redux';
import _isEmpty from 'lodash/isEmpty';

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

        const { CartStore={}, removeCartItemFromShoppingCart, removeShoppingCart } = this.props;
        const { Cart={} } = CartStore;
        const CartProps = {
            Cart,
            removeShoppingCart,
            removeCartItemFromShoppingCart
        };

        if (_isEmpty(Cart)) {
            return null;
        } else if ( !_isEmpty(Cart) && _isEmpty(Cart.cartItemList) ) {
            removeShoppingCart(Cart.shoppingCartId);
        }

        return (
            <CartItems CartProps={CartProps}  />
        );
    } 
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);