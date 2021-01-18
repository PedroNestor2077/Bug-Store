import React from "react";
import "./components.css"
import userlang from "../lang"
function SelectButton(props){
    return (
        <select className="bt_nav" id="selectButton">
            {props.selectList.map((item)=>{
                return <option key={item}>{item}</option>
            })} 
        </select>
    );
}

export default SelectButton;