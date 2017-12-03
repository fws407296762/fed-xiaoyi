
import React from "react";
import ReactDOM from "react-dom";
import {Router,Route} from "react-router";
import createBrowserHistory from 'history/createHashHistory';
import Login from "./modules/Login";
import Transfer from "./modules/Transfer/Transfer.jsx";
import "./style/reset.css";

const history = createBrowserHistory();
class App extends React.Component{
    render(){
        return (
            <Router history={history}>
                <div className="router-view">
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Transfer}/>
                </div>
            </Router>
        )
    }
};

export default App;