import React from "react";
import FormItem from "../form-item";
import "./Login.scss";
let createReactClass = require('create-react-class');
const Login = createReactClass({
    getInitialState(){
        return {
            usename:"",
            passport:""
        }
    },
    handleUserChange(event){
        this.setState({
            usename:event.target.value
        })
    },
    handlePassportChange(event){
        this.setState({
            passport:event.target.value
        })
    },
    handleSubmit(event){
        console.log(this.state.usename,this.state.passport)
        event.preventDefault();
    },
    render(){
        return (
            <div className="login-box">    //人脸识别登陆
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <FormItem value={this.state.usename} onChange={this.handleUserChange}/>
                    <FormItem type="passport" value={this.state.passport} onChange={this.handlePassportChange}/>
                    <input type="submit" value="登陆"/>
                </form>
            </div>
        )
    }
});

export default Login;