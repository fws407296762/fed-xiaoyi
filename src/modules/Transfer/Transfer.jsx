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
                <div className="xy-box"></div>
                <div className="bd-box"></div>
                <div className="move-box"></div>
            </div>
        )
    }
}