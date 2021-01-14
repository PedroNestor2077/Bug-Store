import React from "react";
import "./components.css"
function MenuButton(props) {
    return (
       <button className="Menu_button"><div><p><strong>{props.number}</strong></p><img src={props.ico} width={props.width}></img></div>{props.text}</button>
    )
}
export default MenuButton;