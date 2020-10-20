import React, { Component } from 'react';
import { Provider } from "react-redux";
import {
    Router,
    Switch,
    Route
 } from "react-router-dom";

import store from "./store";
import history from './store/history';

import Home from "./Views/Home";
import Details from "./Views/Details";
import Contact from "./Views/Contact";
import Items from "./Views/Items";

/**
 * HERE WRAPPING THE ROUTES UNDER 
 *                                      BrowserRouter 
 * DOES NOT WORK EFFECTIVELY. THE PROBLEM ENCOUNTERED IS WHILE THE HISTORY IS PUSHING THE NEXT LOCATION
 * OR URL FOR THE NEXT COMPONENT, THE URL CHANGES BUT THE PAGE IS REMAINING SAME. IN CONTRAST TO THIS IT
 * SHOULD CHANGE THE URL AND CORRESPONDINGLY CHANGE THE PAGE AS WELL AND THERE SHOULD BE NO REFRESH IN 
 * BETWEEN. WITH THE USE OF BrowserRouter URL IS GETTING CHANGED AND ON REFRESHING THE PAGE IT LOADS THE
 * PAGE CORRESPONDING TO THE ONE MENTIONED IN THE URL. 
 * 
 * 
 * SO TO PREVENT IT, WE MUST USE 
 *                                      Router
 * WHICH CORRECTLY PASS THE HISTORY AND THEN REFLECT THE CHANGE IN THE URL AS WELL AS ON THE PAGE.
 */

class Application extends Component {
    render () {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/details" component={Details} />
                        <Route path="/items" component={Items} />
                    </Switch>                    
                </Router>
            </Provider>
        );
    }
};

export default Application;