/**
 * Created by fws on 2017/11/1.
 */
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./App";

const render = Component =>{
    ReactDOM.render(
        <Component/>,
        document.getElementById("root")
    )
};

render(App);