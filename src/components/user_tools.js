import React from "react";
import "./components.css"
import {useState}  from 'react';
import Bt_shop from "../components/bt_shop"
import Bt_star from "../components/bt_star"
import User_menu from "./userButton"
function User_tools(){
    const [count, setCount] = useState(3);
    return (
        <div id="user_tools">
            <div id="user-profile">
            <User_menu></User_menu>
            <Bt_star></Bt_star>
            <Bt_shop></Bt_shop>
            </div>
        </div>
    )
}
export default User_tools;