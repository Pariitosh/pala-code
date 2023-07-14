import React, { Component, useState ,useEffect} from "react";
import style from "./background.css";
var slides=["wallpaper0","wallpaper1","wallpaper2","wallpaper3","wallpaper4","wallpaper5","wallpaper6","wallpaper7","wallpaper8","wallpaper9"]
function BlurredBg(){
    var [curr,setCurrent]=useState(0);
    useEffect(() => {
        var interval = setInterval(() => {
          var random = Math.floor(Math.random() * slides.length);
          setCurrent(curr=>random);
        }, 4000);
        
        
        
      }, []);
    var image=<img src={require('./wallpapers/'+slides[curr]+'.jpg')}/>
    var start=1
    return (
        <div className="blurbg">
        {image}
        </div>
    )
}
export default BlurredBg