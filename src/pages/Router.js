import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Personal from "./personal";
import Experience from "./experience";
import Education from "./education";
import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Personal} />
                    <Route path="/Education" component={Education} />
                </Switch>
            </Router>
        )
    }
}