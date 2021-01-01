import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import history from './history';
import Home from './components/Home';
import SelectedList from './components/SelectedList';
import RejectedList from './components/RejectedList';
import Details from './components/Details';

function Application() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/selected-list" component={SelectedList} />
                <Route path="/rejected-list" component={RejectedList} />
                <Route path="/details" component={Details} />
            </Switch>
        </Router>
    );
}

export default Application;