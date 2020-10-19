import React from 'react';
import { NavLink, Route, useRouteMatch, Switch } from "react-router-dom";
import ReactFile from "./ReactFile";
import ReduxFile from './ReduxFile';

const File = () => {

    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2> Select one of the file to display Content</h2>
            <ul>
                <li><NavLink to={`${url}/reactFile`}>ReactFile</NavLink></li>
                <li><NavLink to={`${url}/reduxFile`}>ReduxFile</NavLink></li>
            </ul>

            <Switch>
                <Route exact path={path}><h3>Please select a file.</h3></Route>
                <Route path={`${path}/reactFile`} component={ReactFile} />
                <Route path={`${path}/reduxFile`} component={ReduxFile} />
            </Switch>
        </div>
    );
};

export default File;