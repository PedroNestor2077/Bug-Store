import React from "react";
import "./components.css"
import {useState}  from 'react';
function Bt_star(){
    const [count, setCount] = useState("0");
    return (
        <button className="bt_shop" ><img src="/images/icons/ico_star.png" alt="star"  width="100%"></img><p id="p_star">{count}</p></button>
    )
}

export default Bt_star;