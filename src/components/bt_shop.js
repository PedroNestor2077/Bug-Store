import React from "react";
import "./components.css"
import {useState}  from 'react';
function Bt_shop(){
    const [count, setCount] = useState(2);
    return (
        <button className="bt_shop" ><img src="/images/icons/ico_shop.png" alt="Shop"  width="100%"></img><p>{count}</p></button>
    )
}

export default Bt_shop;