import React, { Component, useState ,useEffect} from "react";
import style from "./background.css";
import _, { random } from "underscore";

var slides=["wallpaper0","wallpaper1","wallpaper2","wallpaper3","wallpaper4","wallpaper5","wallpaper6","wallpaper7","wallpaper8","wallpaper9"]
var l=[0,1,2,3,4,5,6,7,8,9,]
function Background(){
  var [curr,setCurrent]=useState(_.sample(l));
    useEffect(() => {
        var interval = setInterval(() => {
          var random = _.sample(l)
          setCurrent(curr=>random);
        }, 4000);
        
      }, []);
    var image=<img src={require('./wallpapers/'+slides[curr]+'.jpg')}/>
    var start=1
    return (
        <div className="bg">
        {image}
        </div>
    )
}
export default Background