/***
 *  效果：左边是小蚁的操作界面，右边是百度的授权部分和网盘信息，当两边数据都接通，开始下载的时候，然后变成数据互通的效果，看上去很科技的感觉
 *
 *
 * */

import React from "react";
import "./Transfer.scss";
export default class Transfer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="transfer-box">
                <div id="xyBox" className="split xy-box"></div>
                <div className="move-box"></div>
                <div id="bdBox" className="split bd-box"></div>
            </div>
        )
    }
    componentDidMount(){
        let eleWidth = document.documentElement.clientWidth;
        let $xyBox = document.getElementById("xyBox");
        let $bdBox = document.getElementById("bdBox");
        let $moveBox = document.querySelector(".move-box");
        $xyBox.style.width = "calc(50% - 5px)";
        $bdBox.style.width = "calc(50% - 5px)";
        $moveBox.addEventListener("")
    }
}