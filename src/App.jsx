


import React, { useState } from "react";
import Navbar from "./components/Navbar"
import Body from "./components/Body"
export default function App(){
    const [isDark,setIsDark] = useState(false)
    console.log(isDark)
    function handleChange(){
        setIsDark(oldvalue => !oldvalue)
       
    }
    return(
        <div className={`main ${isDark ? "darkmode" : "lightmode"}`}>
            <div className="wrapper"> 
        <Navbar 
        toggler={handleChange}
        /> 
        <Body />
        </div>
        </div>
    )
}