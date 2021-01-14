import React from "react";
import "./components.css"
import userlang from "../lang"
import {useState}  from 'react';
import UserMenu from "./userMenu.js"
import UserInfo from "../userInfo"

function UserButton(props){
    function showUserMenu(){
        if(Menu==null){
            setMenu(<UserMenu/>)
        }else{
            setMenu()
        }
    }
    const [Menu,setMenu]=useState()
    return (
        <div id="UserButton">
            <button id="user_photo" onClick={showUserMenu}>
                <img src={UserInfo.user_photo} alt="user photo" width="100%" height="100%" id="user_photo_img"></img>
                <p id="">{UserInfo.notifications.number}</p>
            </button>
            {Menu}

        </div>
    )
}

export default UserButton;