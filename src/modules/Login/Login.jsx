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
    render(){ /*人脸识别登陆*/
        return (
            <div className="login-box">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <FormItem placeholder="请输入用户名" value={this.state.usename} onChange={this.handleUserChange}>
                        <i className="icon iconfont icon-user">&#xe634;</i>
                    </FormItem>
                    <FormItem placeholder="请输入密码" type="passport" value={this.state.passport} onChange={this.handlePassportChange}>
                        <i className="icon iconfont icon-passport">&#xe615;</i>
                    </FormItem>
                    <input type="submit" className="xy-btn" value="登陆"/>
                </form>
            </div>
        )
    }
});

export default Login;