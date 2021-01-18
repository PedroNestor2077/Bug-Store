import React ,{useState} from "react";
import "./components.css"
import userlang from "../lang"
import SearchHistoryButton from "./searchHistoryButton"
function SearchBar(props){
    const [Text,setText]=useState()
    function teste() {
        console.log("oid")
        let input=document.getElementById("search")
        input.innerText="fadfsadaf"
    }
    return (
        <div id="search_bar" className="search_bar_full">
            <div id="search">
                <input id="search" placeholder={userlang.search_bar}>
                </input>
                <button id="bt_find">
                    <img src="/images/icons/ico_find.png" alt="OK" id="ico_find" width="100%"></img>
                </button>
            </div>
            <div id="SearchHistory">
                <SearchHistoryButton text="button one" onClick={teste}/>
                <SearchHistoryButton text="button two"/>
            </div>
        </div>
    );
}
export default SearchBar;
/* as its possible,add "enter-press" event for search*/