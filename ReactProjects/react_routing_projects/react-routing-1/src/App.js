import React from 'react';
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";
import Home from "./Content/Home";
import Stuff from "./Content/Stuff";
import Contact from "./Content/Contact";
import File from './Content/File';
import ReactFile from "./Content/ReactFile";
import ReduxFile from "./Content/ReduxFile";

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1> Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/file">File</NavLink></li>
          </ul>

          <hr />

          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/file" component={File}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
