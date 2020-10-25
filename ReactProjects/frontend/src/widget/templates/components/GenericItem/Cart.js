import React, { Component } from 'react';
import {connect} from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
// import Image from "react-bootstrap/Image";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// import ImageLocation from "../../ImageLocation";
// import history from '../../../../Redux/history';
import { mapStateToProps, mapDispatchToProps} from '../../../Ecom.connect';
import FrontendApi from '../../../../Api/FrontendApi';

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
        return (
            <div>I am now at the redirected CART page</div>
        );
    } 
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);