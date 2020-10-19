import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Views/Home';
import Dashboard from './Views/Dashboard';
import Items from './Views/Items';

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/items" component={Items} />
                </BrowserRouter>
            </div>
        );
    }
}