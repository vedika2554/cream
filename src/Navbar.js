import React from "react";
import "./Navbar.css"

function Navbar(){
    return (
        <div className="nav"><span className="bn">🍦icecream</span>
        <div className="nl">
            <a href="/"className="nl">Home</a>
            <a href="/about"className="nl">About</a>
            <a href="/contact"className="nl">Contact</a>
        </div>
        </div>
    )
}
export default Navbar