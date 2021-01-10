import React from "react";
import "./header.css"
import userlang from "../lang.js";
function Header() {
  return (
    <div id="header">
        <div id="logo">
            <img src="/images/icons/logo.png" alt="BuyRightNow" width="200px"></img>
        </div>
        <div id="search_bar">
            <input id="search" placeholder={userlang.search_bar}></input>
            <button id="bt_find"><img src="/images/icons/ico_find.png" alt="OK" id="ico_find" width="100%"></img></button>
        </div>
        <div id="login_bar">
            <button className="bt_accont"><a id="login" href="#">{userlang.login} </a></button>
            <p>{userlang.or}</p>
            <button className="bt_accont" id="bt_singup"><a id="singup" href="#">{userlang.singup}</a></button>
        </div>
        <div id="nav_bar">
            <button className="bt_nav">{userlang.category}</button><div id="options"></div>
            <button className="bt_nav">{userlang.foryou}</button>
            <button className="bt_nav">button</button>
            <button className="bt_nav">button</button>
            <button className="bt_nav">button</button>
        </div>
    </div>/* header */
  );
}

export default Header;