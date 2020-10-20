import React, { Component } from 'react';
import { nextButton, prevButton } from "../store/NavigationActions";
import { connect } from "react-redux";

import history from '../store/history';

import { NavLink, Route, Switch, useRouteMatch, Router } from "react-router-dom";

import Item1 from "./StandaloneItems/Item1";
import Item2 from "./StandaloneItems/Item2";
import Item3 from "./StandaloneItems/Item3";
import Item4 from "./StandaloneItems/Item4";


export const mapDispatchToProps = (dispatch) => {
    return {
        handleNextButton : (page) => {
            dispatch(nextButton(page));
        },

        handlePrevButton : (page) => {
            dispatch(prevButton(page));
        }
    };
};

function DetailOf() {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h3>A DetailsOf of entire items</h3>
            
            <Router history={history}>
                <ul>
                    <li><NavLink to={`${url}/item1`}>Item1</NavLink></li>
                    <li><NavLink to={`${url}/item2`}>Item2</NavLink></li>
                    <li><NavLink to={`${url}/item3`}>Item3</NavLink></li>
                    <li><NavLink to={`${url}/item4`}>Item4</NavLink></li> 
                </ul>

                <hr />
                
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

class Items extends Component {
    render() {

        return (
            <div>
                <h3>This is the ITEM PAGE containing the various items to be sold</h3>
                <h4>Below are the items. Click on them to see their individual detail</h4>
                
                <DetailOf />
                
                <button onClick={() => this.props.handlePrevButton('/details')}>PREV</button>
                <button onClick={() => this.props.handleNextButton('/')}>NEXT</button>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Items);