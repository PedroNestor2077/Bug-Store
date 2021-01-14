import React from "react";
import "./small_header.css"
import UserButton from "./userButton"
import LoginButton from "./loginButton"
function Small_Header() {
    return(
        <div id="small_header">
            <div id="logo_small">
                <img src="/images/icons/logo.png" alt="Bug Store" width="200px"/>
            </div>
            <div id="user_bar">
                <LoginButton />
                <UserButton />
            </div>
        </div>/* small header */
    )
}

export default Small_Header;