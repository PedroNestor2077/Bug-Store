import React from "react";
import "./components.css"
import userlang from "../lang"
function SearchHistoryButton(props){
    function copyToInput(){
        if(true){
            let input=document.getElementById("search")
            input.innerText="fadfsadaf"
        };
    };
    return (
        <button className="historyButton">
            <img src="/images/icons/ico_find.png" width="15px"></img>{props.text}
        </button>
    );
}
export default SearchHistoryButton;