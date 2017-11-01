
import React from "react";
import ReactDOM from "react-dom";
import {Router,Route} from "react-router";
import createBrowserHistory from 'history/createHashHistory';
const history = createBrowserHistory();
import Login from "./modules/Login";
ReactDOM.render(
    <Router history={history}>
        <Route path="/login" component={Login}/>
    </Router>,
    document.getElementById("root")
);