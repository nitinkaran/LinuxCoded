import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './history';
import Home from './Views/Home';
import Stuff from './Views/Stuff';
import Contacts from './Views/Contacts';
import Details from './Views/Details';
import Topics from './Views/Topics';
import SubTopic1 from './Views/SubTopic1';
import SubTopic2 from './Views/SubTopic2';

export const locationSequence = [
    "/",
    "Stuff",
    "Contacts",
    "Details",
    "Topics",
    "SubTopic1",
    "SubTopic2",
];

export const locations = [
    {path: '/', component: Home},
    {path: '/Stuff', component: Stuff},
    {path: '/Contacts', component: Contacts},
    {path: '/Details', component: Details},
    {path: '/Topics', component: Topics},
    {path: '/SubTopic1', component: SubTopic1},
    {path: '/SubTopic2', component: SubTopic2}
];

export const MapRoutes1 = () => {
    return locations.map( route => <Route exact path={route.path} component={route.component} />);
};

export const MapRoutes = () => {
    return (
        <Router history={history}>
            <MapRoutes1 />
        </Router>
    );
};