import React from 'react';
import { NavLink, Route, useRouteMatch, Switch } from "react-router-dom";

import ReactBook1 from './Books/ReactBook1';
import ReactBook2 from './Books/ReactBook2';
import ReactBook3 from './Books/ReactBook3';
import ReactBook4 from './Books/ReactBook4';

const ReactFile = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <hr />
            
            <h3>This is the REACT_FILE page to show the react life cycle.</h3>
            <h3>There are many books which can be referred to learn react</h3>

            <ul>
                <li><NavLink to={`${url}/reactBook1`}>ReactBook1</NavLink></li>
                <li><NavLink to={`${url}/reactBook2`}>ReactBook2</NavLink></li>
                <li><NavLink to={`${url}/reactBook3`}>ReactBook3</NavLink></li>
                <li><NavLink to={`${url}/reactBook4`}>ReactBook4</NavLink></li>
            </ul>

            <Switch>
                <Route path={`${path}/reactBook1`} component={ReactBook1} />
                <Route path={`${path}/reactBook2`} component={ReactBook2} />
                <Route path={`${path}/reactBook3`} component={ReactBook3} />
                <Route path={`${path}/reactBook4`} component={ReactBook4} />
            </Switch>
        </div>
    );
};

export default ReactFile;