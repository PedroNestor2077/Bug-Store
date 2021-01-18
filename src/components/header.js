import React, { useCallback } from "react";
import "./header.css"
import userlang from "../lang.js";
import {show_category,hide_category,show_header,hide_header} from "../functions.js"
function Header() {
    return (
        <div id="div-header" className="header_full" >
            <div id="logo">
                <img src="/images/icons/logo.png" alt="Bug Store" width="200px"></img>
            </div>
            <div className="nav_bar_on" id="nav_bar">
                <button className="bt_nav" onMouseEnter={show_category} >{userlang.category}</button>
                <button className="bt_nav">{userlang.day_offer}</button>
                <button className="bt_nav">{userlang.foryou}</button>
                <button className="bt_nav">{userlang.sell}</button>
                <button className="bt_nav">{userlang.contact_us}</button>
            </div>
            <div id="category" className="category_off" onMouseLeave={hide_category}>
            <button className="bt_category" >{userlang.veicles}</button>
            <button className="bt_category">{userlang.work_tools}</button>
            <button className="bt_category">{userlang.tecnology}</button>
            <button className="bt_category">{userlang.home_thigs}</button>
            <button className="bt_category">{userlang.sport}</button>
            <button className="bt_category">{userlang.fashion}</button>
            </div>  
        </div>/* header */
  );
}

export default Header;