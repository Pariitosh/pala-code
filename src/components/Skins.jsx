import React, { useRef, useState } from "react";
import styles from "./skins.css";
import { Link } from "react-router-dom";
import Background from "./Background.jsx";
import BlurredBg from "./BlurredBg";
import FinishBox from "./FinishBox";
import CorrectBox from "./CorrectBox";
import _ from "underscore";
function Skins() {
  var guess = useRef(null);
  const [pics, delpics] = useState([
    "bewitching evie",
    "bossfight koga",
    "carnival ying",
    "contessa vivian",
    "cottontail seris",
    "divine seris",
    "dune crawler cassie",
    "dunestrider kinessa",
    "emerald bandit maeve",
    "fallen androxus",
    "heartbreaker tyra",
    "high elf lian",
    "huntsman androxus",
    "iced out saati",
    "infernal seris",
    "inventor pip",
    "mad scientist pip",
    "madame seris",
    "omega koga",
    "omega zhin",
    "quicksilver ying",
    "reaver viktor",
    "sea queen saati",
    "sigma vivian",
  ]);
  const [score, setScore] = useState(0);
  const [tasks, setTasks] = useState(10);
  const [correct, setCorrect] = useState(0);
  const [active, setActive] = useState(false);
  const [ans, setAns] = useState("Wrong");
  var random = _.sample(pics)
  var pic=random
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setActive(true);
    setAns("Wrong");
    
    if (
      pic === guess.current.value.toUpperCase() ||
      pic === guess.current.value.toLowerCase()
    ) {
      setScore(score + 10);
      setCorrect(correct + 1);
      setAns("Correct");
    }
  };
  const ok = () => {
    const items = ['a', 'b', 'c', 'd', 'e', 'f']
    
       
    setTasks(tasks - 1);
    if (active==true)
    setActive(false);

  };
  return (
    <React.Fragment>
      <BlurredBg />
      <form onSubmit={handleSubmit}>
        <div className="mainskinss">
          <div className="mainskins">
            <div className="blurred"></div>
            {tasks === 0 && (
              <div className="mainbox">
                <div className="abox"></div>
                <FinishBox correct={correct}></FinishBox>
              </div>
            )}
            {active == true && tasks != 0 && (
              <CorrectBox ok={ok} ans={ans}></CorrectBox>
            )}
            <div className="picbox">
              {tasks!=0&&active == false && (
                <img src={require("./images/" + random + ".jpg")} />
              )}
              <div className="guessbox">
                {tasks!=0&&active == false && (
                  <div className="input">
                    <input ref={guess} type="text" name="" id="" />
                  </div>
                )}

                {active == false && (
                  <div className="submit">
                    <button type="submit">Submit</button>
                  </div>
                )}
              </div>
              {tasks !== 0 && (
                <div className="score">
                  <div className="scores">
                    <p1>Tasks left</p1>
                    <p2>{tasks} </p2>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Skins;
