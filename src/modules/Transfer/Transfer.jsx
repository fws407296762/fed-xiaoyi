/***
 *  效果：左边是小蚁的操作界面，右边是百度的授权部分和网盘信息，当两边数据都接通，开始下载的时候，然后变成数据互通的效果，看上去很科技的感觉
 *
 *
 * */

import React from "react";
import "./Transfer.scss";
import 'whatwg-fetch'
export default class Transfer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            xyAccount:"",
            xyPassport:""
        };
        this.handleXYAccountChange = this.handleXYAccountChange.bind(this);
        this.handleXYPassportChange = this.handleXYPassportChange.bind(this);
        this.loginXY = this.loginXY.bind(this);
    }
    handleXYAccountChange(event){
        console.log(this)
        this.setState({
            xyAccount:event.target.value
        });
    }
    handleXYPassportChange(event){
        this.setState({
            xyPassport:event.target.value
        });
    }
    loginXY(event){
        event.preventDefault();
        let account = this.state.xyAccount;
        let passport = this.state.xyPassport;
        this.loginXYRequest({
            data:{
                account:account,
                passport:passport
            }
        });
        return false;
    }
    jsonToFormData(json){
        if(!json)return;
        let isObject = Object.prototype.toString.call(json) === "[object Object]";
        if(!isObject)return;
        let formData = [];
        for(let i in json){
            formData.push(i + "=" + json[i]);
        }
        return formData.join("&");
    }
    loginXYRequest(options){
        options = options || {};
        let data = this.jsonToFormData(options.data);
        fetch("http://www.changtangkou.com:8090/api/xiaoyi/login",{
            method:"POST",
            body:data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(function(response){
            console.log(response)
        }).catch(function(res){
            console.log(res);
        })
    }
    render(){
        return (
            <div className="transfer-box">
                <div id="xyBox" className="split xy-box">
                    <form onSubmit={this.loginXY}>
                        <h3>登陆小蚁云存储</h3>
                        <div className="form-item">
                            <input type="text" onChange={this.handleXYAccountChange} value={this.state.xyAccount} placeholder="请输入小蚁云存储账号"/>
                        </div>
                        <div className="form-item">
                            <input type="password" name="" onChange={this.handleXYPassportChange} value={this.state.xyPassport} placeholder="请输入小蚁云存储密码" id=""/>
                        </div>
                        <input type="submit" value="登陆"/>
                    </form>
                </div>
                <div className="move-box"></div>
                <div id="bdBox" className="split bd-box"></div>
            </div>
        )
    }
    componentDidMount(){
        this.initTransfer();
    }
    initTransfer(){
        let eleWidth = document.documentElement.clientWidth;
        let $xyBox = document.getElementById("xyBox");
        let $bdBox = document.getElementById("bdBox");
        let $moveBox = document.querySelector(".move-box");
        let parent = $xyBox.parentNode;
        let startX = $xyBox.getBoundingClientRect()["left"];
        let isDrag = false;
        let xySize = 50,
            bdSize = 50,
            percentage = 100;
        $xyBox.style.width = "calc("+xySize+"% - 5px)";
        $bdBox.style.width = "calc("+bdSize+"% - 5px)";
        $moveBox.addEventListener("mousedown",start);

        parent.addEventListener("mouseup",function(){
            self.dragging = false;
            parent.removeEventListener("mousemove",move);
        });

        function start(e){
            isDrag = true;
            parent.addEventListener("mousemove",move);
        }
        function move(e){
            if(!isDrag){return;}
            e.preventDefault();
            let currentX = e.clientX;
            let currentY = e.clientY;
            let dx = currentX - startX;
            xySize = (dx / eleWidth) * percentage;
            bdSize = percentage - xySize;
            $xyBox.style.width = "calc("+xySize+"% - 5px)";
            $bdBox.style.width = "calc("+bdSize+"% - 5px)";
        }
    }
}