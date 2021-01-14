import React from "react";
import "./components.css"
import userlang from "../lang"
import MenuButton from "./menuButton"
import UserInfo from "../userInfo"
function UserMenu(){
    return (
        <div id="menu">
            <MenuButton text={userlang.myaccount} ico={UserInfo.user_photo} width="30px" number=""></MenuButton>
            <MenuButton text={userlang.shopping} ico="/images/icons/ico_shopping.png" width="30px" number="2"></MenuButton>
            <MenuButton text={userlang.sell} ico="/images/icons/ico_sell.png" width="30px" number="0"></MenuButton>
            <MenuButton text={userlang.cart} ico="/images/icons/ico_shop.png" width="30px" number="7"></MenuButton>
            <MenuButton text={userlang.notfications} ico="/images/icons/ico_notification.png" width="30px" number="12"></MenuButton>
            <MenuButton text={userlang.favorites}ico="/images/icons/ico_star.png" width="30px" number="3"></MenuButton>
            <MenuButton text={userlang.settings} ico="/images/icons/ico_settings.png" width="30px"></MenuButton> 
        </div>
    )
};
export default UserMenu;
