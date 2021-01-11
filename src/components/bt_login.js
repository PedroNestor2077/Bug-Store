import React from "react";
import "./components.css"
import userlang from "../lang.js";
import {useState}  from 'react';

function Singup_login(){
    const [IsLogged] = useState(false);
    if (IsLogged){
        return (
            <div id="div_bt_login">
                <button className="bt_accont"><a id="login" href="#" >{userlang.login} </a></button>
                <button className="bt_accont" id="bt_singup"><a id="singup" href="#">{userlang.singup}</a></button>
            </div>    
        )
    }else{
        return (
            <div id="div_bt_login">
                <button className="bt_accont"><a id="login" href="#" >{userlang.myaccount}</a></button>
                <button className="bt_accont" id="bt_singout"><a id="singup" href="#">{userlang.singout}</a></button>
            </div>    
        )
    }
    
}
export default Singup_login;