import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./style.css"
import VoiceLines from './VoiceLines.jsx';
import Location from "./Location.jsx";
function Menu() {
    return (
        <div className="menu">
            <div>
            <ul> 
            <li> <Link to ="/Skins" style={{ textDecoration: 'none' }}>Guess the skin!</Link></li>
            <li> <Link to ="/Location" style={{ textDecoration: 'none' }}>Guess the map!</Link></li>
            <li> <Link to ="/VoiceLines" style={{ textDecoration: 'none' }}>Guess champions!</Link></li>
            </ul>
        </div>
        </div>
        

    )
}
export default Menu