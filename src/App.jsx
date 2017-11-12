
import React from "react";
import ReactDOM from "react-dom";
import {Router,Route} from "react-router";
import createBrowserHistory from 'history/createHashHistory';
const history = createBrowserHistory();
import Login from "./modules/Login";
import "./style/reset.css";

class App extends React.Component{
    render(){
        return (
            <Router history={history}>
                <Route path="/login" component={Login}/>
            </Router>
        )
    }
};

export default App;