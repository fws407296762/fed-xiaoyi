import React from "react";
import 'whatwg-fetch';
class xyVideo extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let requestLoginVideoPromise = this.requestLoginVideo();
        requestLoginVideoPromise.then(function(response){
            return response.json();
        }).then(function(res){
            console.log(res);
        })
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
    requestLoginVideo(options) {
        options = options || {};
        let data = this.jsonToFormData(options.data || {});
        return fetch("http://www.changtangkou.com:8090/api/xiaoyi/video?"+data,{
            method:"GET"
        })
    }
    render(){
        return (
            <div>
                <video id="my_video_html5_api"  className="vjs-tech" poster="/resources/images/poster.png" data-setup="{&quot;controls&quot;: false, &quot;autoplay&quot;: true, &quot;preload&quot;: false,&quot;techOrder&quot;: [&quot;flash&quot;,&quot;html5&quot;]}" autoPlay src="blob:https://yun.xiaoyi.com/9757909c-8b44-44f1-b82b-5c6c6cb2113d">
                    <source src="https://api.xiaoyi.com/v4/cloud/index.m3u8?expire=1514370086&amp;code=24B9C173D781B6F40BE87CC22FA6EC32F38C626C218F9DD8B06BE2842A2956BD264A337E51D19E298DAC4587E325DC43FB664AAF78F913B9BD507F4694A33CF1D27B5428B1CC9B51EDF7A1886E93E927D649D11D95CD35C2465164B178068330&amp;hmac=pw5dzbs8VirwqNaqpQyLYe%2FumIg%3D&amp;protocol=https" type="application/x-mpegurl"></source>
                </video>
            </div>
        )
    }
}
export default xyVideo;
