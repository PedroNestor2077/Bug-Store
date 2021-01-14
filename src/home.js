import React, { useState,useEffect } from "react";
import Header from "./components/header.js"
import Small_Header from "./components/small_header"
import "./home.css"

/* Home page */
function Home() {    
  window.onresize=()=>{
    if (window.innerWidth>1000){
      setLarger(true)
    }else if(window.innerWidth<1000){
        setLarger(false)
    }
  };
  const [Larger,setLarger]=useState(false)
  const [CurrentHeader,setCurrentHeader]=useState()

   useEffect(()=>{
     if (Larger==false){
      setCurrentHeader(<Small_Header />)
      }
      else if(Larger){
        setCurrentHeader(<Header/>)
      }
     },[Larger])
    

  
  return (
    <div id="home_page">
      {CurrentHeader}
      </div>
  )
}
export default Home;
