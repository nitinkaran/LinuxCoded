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
    
    static callAxios(methodType, urlLink) {
        const prependUrl = `${this.getUrl()}${urlLink}`;
        return axios({
            method: methodType,
            url: prependUrl,
            config: this.getConfig()
        });
    }

    static getProductCategories = () => {
        return this.callAxios('get', '/product-group');
    };

    static getProducts = () => {
        return this.callAxios('get', '/product');
    };

}
