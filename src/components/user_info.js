import React from "react";
import "./components.css"
import {useState}  from 'react';

function User_info(props){
    const [
        /* User Info */
        Info={
            username:"@"+"pedronestor",
            firstname:"User",
            lastname:"Nestor",
            photo: "/images/icons/me.jpg",
            notfications_number: 0,
            }

    ,] = useState();
    return (
        <div id="user_info">
            <p id="user_name" >{Info.username}</p>
            <button id="user_photo">
                <img src={Info.photo} alt="user photo" width="100%" height="100%" id="user_photo_img"></img>
                <p id="">{Info.notfications_number}</p>
            </button>
            
        </div>
    )
}
export default User_info;