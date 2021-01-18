import React from "react";
import "./components.css"
import userlang from "../lang.js";
import UserInfo from "../userInfo"
function LoginButton(){
    if (UserInfo.islogged){
        return (
            <div id="div_bt_login">
                <a className="loginButton" href="#" >{userlang.myaccount}</a>
                <a className="loginButton" href="#">{userlang.singout}</a>
            </div>    
        )
    }else{
        return (
            <div id="div_bt_login">
                <a className="loginButton" href="#" >{userlang.login}</a>
                <a className="loginButton" href="#">{userlang.singup}</a>
            </div>    
        )

    } 
}
export default LoginButton;
