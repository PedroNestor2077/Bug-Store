import React from "react";
import "./components.css"
function Button(props) {
    return (
       <button className="Mybutton">{props.text}</button>
    )
}

export default Button;