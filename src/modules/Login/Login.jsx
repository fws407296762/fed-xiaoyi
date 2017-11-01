import React from "react";
var createReactClass = require('create-react-class');
// export default class Login extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             value:"付文松"
//         };
//     }
//
//     render(){
//         return (
//             <input type="text" value={this.state.value} onChange={this.handleChange}/>
//         )
//     }
// };

const Login = createReactClass({
    getInitialState(){
        return {
            usename:"付文松",
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
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">
                    用户名：
                    <input type="text"  value={this.state.usename} onChange={this.handleUserChange}/>
                </label>
                <label htmlFor="">
                    密码：
                    <input type="password" value={this.state.passport} onChange={this.handlePassportChange} />
                </label>
                <input type="submit" value="登陆"/>
            </form>
        )
    }
});

export default Login;