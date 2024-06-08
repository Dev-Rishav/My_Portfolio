import React from "react";
import "./Navbar.css";
import LOGO from "../../assets/Logo_tmp.jpg"

const Navbar = () => {
    return<div className="Navbar">
        <img src = {LOGO} alt="user-Logo"/>

        <div className="Nav-menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contacts</li>
            </ul>
        </div>

        <div className="Nav-connect">Connect with me</div>
        </div>
}

export default Navbar;