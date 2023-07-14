import React, { useState } from "react";
import style from "./voicelines.css";
import _, { random } from "underscore";
import audio1 from "./audio/Androxus1.mp3";
import audio2 from "./audio/Atlas1.mp3";
import audio3 from "./audio/Atlas2.mp3";
import audio4 from "./audio/BombKing1.mp3";
import audio5 from "./audio/BombKing2.mp3";
import audio6 from "./audio/Buck1.mp3";
import audio7 from "./audio/Buck2.mp3";
import audio8 from "./audio/Cassie1.mp3";
import audio9 from "./audio/Cassie2.mp3";
import audio10 from "./audio/Cassie3.mp3";
import audio11 from "./audio/Evie1.mp3";
import audio12 from "./audio/Imani2.mp3";
import audio13 from "./audio/Io2.mp3";
import audio14 from "./audio/Jenos1.mp3";
import audio15 from "./audio/Jenos2.mp3";
import audio16 from "./audio/Khan1.mp3";
import audio17 from "./audio/Koga1.mp3";
import audio18 from "./audio/Koga2.mp3";
import audio19 from "./audio/Lex1.mp3";
import audio20 from "./audio/Lex2.mp3";
import audio21 from "./audio/Lian1.mp3";
import audio22 from "./audio/Lian2.mp3";
import audio23 from "./audio/Maeve1.mp3";
import audio24 from "./audio/Makoa1.mp3";
import audio25 from "./audio/Makoa2.mp3";
import audio26 from "./audio/Ying1.mp3";
import audio27 from "./audio/Ying2.mp3";
import BlurredBg from "./BlurredBg";
import { useRef } from "react";
import CorrectBox from "./CorrectBox";
import FinishBox from "./FinishBox";
function VoiceLines() {
  const audios = [audio1, audio2,audio3, audio4, audio5,
    audio6,audio7, audio8,audio9, audio10, audio11,
    audio12, audio13,audio14, audio15, audio16,
    audio17, audio18,audio19, audio20, audio21,
    audio22, audio23,audio24, audio25, audio26,
    audio27
  ];
  const test = [
     "androxus", "atlas",
     "atlas",     "Bombking",
     "Bombking",  "buck",
     "buck",      "cassie",
   "cassie",   "cassie",
   "evie",     "imani",
   "io",       "jenos",
 "jenos",    "khan",
   "koga",     "koga",
     "lex",      "lex",
     "lian",     "lian",
     "maeve", "makoa",
     "makoa",  "ying",
     "ying"
  ];
  const [score, setScore] = useState(0);
  const [tasks, setTasks] = useState(10);
  var guess = useRef(null);
  var random=_.random(0,audios.length);
  const playaudio = (event) => {
    event.preventDefault();
    var sound=new Audio(audios[random])
    sound.play();
  };
  const [correct, setCorrect] = useState(0);
  const [ans, setAns] = useState("Wrong");
  const [active, setActive] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (active == false) {
      setActive(true);
    }
    if (active == true) {
      setActive(false);
    }
   
    if (
      test[random] === guess.current.value.toUpperCase() ||
      test[random] === guess.current.value.toLowerCase()
    ) {
      setScore(score + 10);
      setCorrect(correct + 1);
      setAns("Correct");
    }
  };
  const ok = () => {
    setTasks(tasks - 1);
    setActive(false);
    setAns("Wrong")
  };
  if (tasks == 0) {
    return (
      <React.Fragment>
        <BlurredBg></BlurredBg>
        <div className="tint2"></div>
        <FinishBox correct={correct}></FinishBox>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <BlurredBg />
        <div className="all">
          <div className="tint"></div>
          {active == false && (
            <div className="audiobar">
              <div className="scoree">
                <div className="s1">
                  <p1>Score</p1>
                  <p3>{score}</p3>
                </div>
                <div className="s2">
                  <p2>Tasks left</p2>
                  <p4>{tasks}</p4>
                </div>
              </div>
              {
                <div onClick={playaudio} className="playb">
                  <p>Play</p>
                </div>
              }
            </div>
          )}
          {active == true && (
            <CorrectBox ok={ok} ans={ans}></CorrectBox>
          )}
          <form onSubmit={handleSubmit}>
            {active == false && (
              <div className="inputv">
                <input
                  placeholder="Guess the Champion"
                  ref={guess}
                  type="text"
                />
              </div>
            )}
            <div className="submitv">
              {active == false && <button type="submit">Submit</button>}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default VoiceLines;
