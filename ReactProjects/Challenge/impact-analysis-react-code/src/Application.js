import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './components/Home';
import SelectedList from './components/SelectedList';
import RejectedList from './components/RejectedList';

function Application() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/selected-list" component={SelectedList} />
                <Route path="/rejected-list" component={RejectedList} />
            </Switch>
        </Router>
    );
}

export default Application;