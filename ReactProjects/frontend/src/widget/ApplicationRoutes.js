import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../Redux/history';

import Home from  './templates/Home';
import ArticleConfiguration from './templates/components/GenericItem/GenericItemDetails';
import Cart from './templates/components/GenericItem/Cart';
import Confirmation from './templates/Confirmation';

import Books from './templates/components/Books';
import Cloths from './templates/components/Cloths';
import Computers from './templates/components/Computers';
import Furniture from './templates/components/Furniture';
import Tools from './templates/components/Tools';

const appRoutesConfig = [
    {path : '/', component : Home},
    {path : '/books', component : Books},
    {path : '/cloths', component : Cloths},
    {path : '/computers', component : Computers},
    {path : '/furniture', component : Furniture},
    {path : '/tools', component : Tools},
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

