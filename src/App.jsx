
import React from "react";
import ReactDOM from "react-dom";
import {Router,Route} from "react-router";
import createBrowserHistory from 'history/createHashHistory';
const history = createBrowserHistory();
import Login from "./modules/Login";
import Transfer from "./modules/Transfer";
import "./style/reset.css";

class App extends React.Component{
    render(){
        return (
            <Router history={history}>
                <div className="router-view">
                    <Route path="/login" component={Login}/>
                    <Route path="/transfer" component={Transfer}/>
                </div>
            </Router>
        )
    }
};

export default App;