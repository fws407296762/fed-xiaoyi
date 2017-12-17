import React from "react";
import ReactDOM from "react-dom";

import FormItem from "../form-item";
import "./Login.scss";
import Circle from "../canvas/randomCircular";
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
        event.preventDefault();
    },
    componentDidMount(){
        this.drawLoginBackground();
        window.addEventListener("resize",this.drawLoginBackground);
    },

    /*
     *  开始画 canvas 背景
     */
    drawLoginBackground(){
        let canvas = document.getElementById("loginBg");
        let ctx = canvas.getContext("2d");
        let w = canvas.width = canvas.offsetWidth;
        let h = canvas.height = canvas.offsetHeight;
        let circles = [];
        let draw = function(){
            ctx.clearRect(0,0,w,h);
            ctx.fillStyle = "#f0f0f0";
            ctx.fillRect(0,0,w,h);
            for(let i = 0;i<circles.length;i++){
                circles[i].move(w,h);
                circles[i].drawCircle(ctx);
                for(let j = i+1;j <circles.length;j++){
                    circles[i].drawLine(ctx,circles[j]);
                }
            }
            requestAnimationFrame(draw);
        };
        for(let i = 0;i<60;i++){
            circles.push(new Circle(Math.random() * w,Math.random() * h));
        }
        draw();
    },
    render(){ /*人脸识别登陆*/
        return (
            <div className="login-box">
                <canvas id="loginBg" className="login-bg"></canvas>
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