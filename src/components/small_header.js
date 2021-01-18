import React, { useState,useEffect } from "react";
import "./small_header.css"
import UserButton from "./userButton"
import LoginButton from "./loginButton"
import SearchBar from "./searchBar.js"
import SelectButton from "./selectButton"
import { languages } from "../lang";
function Small_Header() {
    window.onresize=()=>{
        if (window.innerWidth>700){
          setLarger(true)
        }else if(window.innerWidth<700){
            setLarger(false)
        }
      };
      const [Larger,setLarger]=useState(false)
      const [CurrentComponent,setCurrentComponent]=useState()
    
       useEffect(()=>{
         if (Larger==false){
          setCurrentComponent(
            <div id="user_bar">
                <UserButton />
            </div>
          )
          }
          else if(Larger){
            setCurrentComponent(
                <div id="user_bar">
                    <SelectButton selectList={languages}/>
                    <LoginButton />
                    <UserButton />
                </div>)
          }
         },[Larger])
    return(
        <div id="small_header">
            <div id="logo_small">
                <img src="/images/icons/logo.png" alt="Bug Store" width="200px"/>
            </div>
            <SearchBar/>
            {CurrentComponent}
        </div>/* small header */
    )
}
export default Small_Header;