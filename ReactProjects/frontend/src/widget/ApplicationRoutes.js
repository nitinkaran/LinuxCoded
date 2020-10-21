import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../Redux/history';

import Home from  './templates/components/Home';
import Article from './templates/components/Article';
import ArticleConfiguration from './templates/components/ArticleConfiguration';
import Cart from './templates/components/Cart';
import Confirmation from './templates/components/Confirmation';

const appRoutesConfig = [
    {path : '/', component : Home},
    {path : '/article', component : Article},
    {path : '/articleConfiguration', component : ArticleConfiguration},
    {path : '/cart', component : Cart},
    {path : '/confirmation', component : Confirmation}
];

const createRoute = (path, component) => (
    <Route exact path={path} key={path} component={component} />
);

const getApplicationRoutes = (routes) => {
    return routes.map(route => createRoute(route.path, route.component));
};

const buildRouter = (routesConfig, mapRoutes = getApplicationRoutes) => {
    const applicationRoutes = mapRoutes(routesConfig);
    return (
        <Router history={history}>
            <Switch>
                {applicationRoutes}
            </Switch>
        </Router>
    );
};

const ApplicationRoutes = () => buildRouter(appRoutesConfig, getApplicationRoutes);

export default ApplicationRoutes;

