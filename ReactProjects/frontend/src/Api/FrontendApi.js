import axios from 'axios';

export default class FrontendApi {

    static getUrl() {        
        return "http://localhost:4000";
    };

    static getConfig() {
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        };
        return config;
    }
    
    static callAxios(methodType, urlLink, payload={}) {
        const prependUrl = `${this.getUrl()}${urlLink}`;
        return axios({
            method: methodType,
            url: prependUrl,
            config: this.getConfig(),
            data: payload
        });
    }

    static getProductCategories = () => {
        return this.callAxios('get', '/product-group');
    };

    static getProducts = () => {
        return this.callAxios('get', '/product');
    };

    static getProductById = (productId) => {
        return this.callAxios('get', `/product/${productId}`);
    }

    static createCartItem = (selectedProduct) => {
        return this.callAxios('post', '/create-cartItem', selectedProduct);
    }

    static createShoppingCart = (cartItem) => {
        return this.callAxios('post', '/cart', cartItem);
    }

    static addCartItemToShoppingCart = (cartItem, cartId) => {
        return this.callAxios('post', `/cart/${cartId}`, cartItem);
    }

}
