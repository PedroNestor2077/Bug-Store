import React from "react";
import "./components.css"
import {useState}  from 'react';
import Bt_shop from "../components/bt_shop"
import Bt_star from "../components/bt_star"
import User_info from "../components/user_info"
import Singup_login from "../components/bt_login.js"
function User_tools(){
    const [count, setCount] = useState(3);
    return (
        <div id="user_tools">
            
            <div id="user-profile">
            <User_info></User_info>
            <Bt_star></Bt_star>
            <Bt_shop></Bt_shop>
            </div>
        </div>
    )
}
export default User_tools;