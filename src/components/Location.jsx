import BlurredBg from "./BlurredBg";
import React, { useState } from "react";
import style from "./location.css";
import FinishBox from "./FinishBox";
import CorrectBox from "./CorrectBox";
function Location() {
  
  const pics=[
    "Ascension Peak 1","Ascension Peak 2","Ascension Peak 3",
    "Bazaar 1","Bazaar 2","Bazaar 3","Bazaar 4",
    "Brightmarsh 1","Brightmarsh 2","Brightmarsh 3",
    "Dawnforge 1",
    "Fish Market 1","Fish Market 2","Fish Market 3",
    "Frozen Guard 1","Frozen Guard 2","Frozen Guard 3",
    "Ice Mines 1","Ice Mines 2","Ice Mines 3","Ice Mines 4","Ice Mines 5","Ice Mines 6",
    "Jaguar Falls 1","Jaguar Falls 2","Jaguar Falls 3","Jaguar Falls 4",
    "Serpent Beach 1","Serpent Beach 2","Serpent Beach 3","Serpent Beach 4",
    "Splitstone Quarry 1","Splitstone Quarry 2","Splitstone Quarry 3","Splitstone Quarry 4",
    "Stone Keep 1","Stone Keep 2","Stone Keep 3",
    "Timber Mill 1","Timber Mill 2","Timber Mill 3","Timber Mill 4",
  ]
  var maps={"box1":"Serpent Beach",
  "box2":"Ascension Peak","box3":"Bazaar",
  "box4":"Brightmarsh","box5":"Dawnforge",
  "box6":"Fish Market","box7":"Frozen Guard",
  "box8":"Ice Mines","box9":"Jaguar Falls",
  "box10":"Shattered Desert","box11":"Splitstone Quarry",
  "box12":"Stone Keep","box13":"Timber Mill",
  "box14":"Warder's Gate","box15":"Frog Isle",
}
  var random = Math.floor(Math.random() * pics.length);
  const [ans,setAns]=useState("Wrong")
  const [tasks, setTasks] = useState(10);
  const [active,setActive]=useState(false)
  const [correct,setCorrect]=useState(0)
  const handleSubmit=(event)=>
{
  event.preventDefault();
  if (pics[random].includes(maps[event.currentTarget.className])){
    console.log("correct")
    setAns("Correct")
    setCorrect(correct+1)
  }
  setActive(true)
  const index = pics.indexOf(pics[random]);
  if (index > -1) {
    pics.splice(index, 1);
  }
}
  const ok = (event) => {
    event.preventDefault();
    setActive(false)
    setAns("Wrong")
    setTasks(tasks-1)
  };
  return (
    <React.Fragment>
      <BlurredBg></BlurredBg>
      <div className="tint12"></div>
      {tasks == 0 && <FinishBox correct={correct}></FinishBox>}
      {tasks != 0 &&active==false&&<div className="first"><h>Choose this picture's location from below</h></div>}
      {tasks != 0 &&active==false&&<div className="mainimage">
      <img src={require("./Locations/"+pics[random]+".jpg")} />
      </div>}
      <div className="taskleft">
<h>Tasks left</h>
<p>{tasks}</p>
      </div>
      {tasks != 0 &&active==false&&<div className="boxes">
        <div className="row1">
          <div className="box1" onClick={handleSubmit}>
            <img src={require("./maps/serpent beach.webp")} />
            <p>Serpent Beach</p>
          </div>
          <div className="box2"onClick={handleSubmit}>
            <img src={require("./maps/ascension peak.webp")} />
            <p>Ascension Peak</p>
          </div>
          <div className="box3"onClick={handleSubmit}>
            <img src={require("./maps/bazaar.webp")} /><p>Bazaar</p>
          </div>
          <div className="box4"onClick={handleSubmit}>
            <img src={require("./maps/brightmarsh.webp")} /><p>Brightmarsh</p>
          </div>
          <div className="box5"onClick={handleSubmit}>
            <img src={require("./maps/dawnforge.webp")} /><p>Dawnforge</p>
          </div>
        </div>
        <div className="row2">
          <div className="box6"onClick={handleSubmit}>
            <img src={require("./maps/fish market.webp")} /><p>Fish Market</p>
          </div>
          <div className="box7"onClick={handleSubmit}>
            <img src={require("./maps/frozen guard.webp")} /><p>Frozen Guard</p>
          </div>
          <div className="box8"onClick={handleSubmit}>
            <img src={require("./maps/ice mines.webp")} /><p>Ice Mines</p>
          </div>
          <div className="box9"onClick={handleSubmit}>
            <img src={require("./maps/jaguar falls.webp")} /><p>Jaguar Falls</p>
          </div>
          <div className="box10"onClick={handleSubmit}>
            <img src={require("./maps/shattered desert.webp")} /><p>Shattered Desert</p>
          </div>
        </div>
        <div className="row3">
          <div className="box11"onClick={handleSubmit}>
            <img src={require("./maps/splitstone quarry.webp")} /><p>Splitstone Quarry</p>
          </div>
          <div className="box12"onClick={handleSubmit}>
            <img src={require("./maps/stone keep.webp")} /><p>Stone Keep</p>
          </div>
          <div className="box13"onClick={handleSubmit}>
            <img src={require("./maps/timber mill.webp")} /><p>Timber Mill</p>
          </div>
          <div className="box14"onClick={handleSubmit}>
            <img src={require("./maps/warder's gate.webp")} /><p>Warder's Gate</p>
          </div>
          <div className="box15"onClick={handleSubmit}>
            <img src={require("./maps/frog isle.webp")} /><p>Frog Isle</p>
          </div>
        </div>
      </div>}
      {active==true&&<CorrectBox ans={ans} ok={ok}></CorrectBox>}
    </React.Fragment>
  );
}
export default Location;
