
import React  from "react"
import Logo from "../img/reactlogo.jpeg"
export default function Navbar({isDark,toggler}){
    return(
        <div className="nav-container">
            <div className="nav-img">
                <img 
                src={Logo} 
                className="nav-logo"
                />
              <div className="nav-text">
                ReactFacts
              </div>
            </div>
            <div className="nav-toggler"> 
         <p className="pl">light Mode</p>
            <label htmlFor="nav-label" className="nav-label">
                <input 
                type="checkbox" 
                id="nav-label"
                name="checkbox"
                checked={isDark}
                onChange={toggler}
                />
                <div 
                className="nav-slide"
                ></div>
            </label>
            <p className="pd">Dark Mode</p>
            </div>
        </div>
    )
}