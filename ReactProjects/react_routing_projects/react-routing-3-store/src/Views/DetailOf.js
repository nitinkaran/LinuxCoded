import React from 'react';
import { Route, NavLink, Switch, useRouteMatch, Router } from "react-router-dom";

import Item1 from "./StandaloneItems/Item1";
import Item2 from "./StandaloneItems/Item2";
import Item3 from "./StandaloneItems/Item3";
import Item4 from "./StandaloneItems/Item4";

function DetailsOf() {

    let { path, url } = useRouteMatch();

    return (
        <div>
            <h3>A DetailsOf of entire items</h3>

            <Router>
                <ul>
                    <li><NavLink to={`${url}/item1`}>Item1</NavLink></li>
                    <li><NavLink to={`${url}/item2`}>Item2</NavLink></li>
                    <li><NavLink to={`${url}/item3`}>Item3</NavLink></li>
                    <li><NavLink to={`${url}/item4`}>Item4</NavLink></li> 
                </ul>

                <Switch>
                    <Route exact path={`${path}/item1`} component={Item1}></Route>
                    <Route path={`${path}/item2`} component={Item2}></Route>
                    <Route path={`${path}/item3`} component={Item3}></Route>
                    <Route path={`${path}/item4`} component={Item4}></Route>
                </Switch> 
            </Router>
        </div>
    );
}

export default DetailsOf;