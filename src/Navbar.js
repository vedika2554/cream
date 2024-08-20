import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className="nav"><span className="bn">🍦icecream</span>
        <div className="nl">
            <Link to="/"className="nl">Home</Link>
            <Link to="/about"className="nl">About</Link>
            <Link to="/contact"className="nl">Contact</Link>
        </div>
        </div>
    )
}
export default Navbar