import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import Square from "./components/Square";
import PlayBar from "./components/PlayBar";

import logo from "./images/logo.png";
import audio from "./audio";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const player = useSelector((state) => state.player.value);
  const running = useSelector((state) => state.player.isRunning);
  const interval = useRef(null);

  useEffect(() => {
    if (player && running !== 0) {
      if (!isActive) {
        setIsActive(true);
        interval.current = setInterval(
          () => setTimer((timer) => timer + 1),
          10
        );
      }
    }
    if (!player || running <= 0) {
      clearInterval(interval.current);
      setIsActive(false);
      setTimer(0);
    }
  }, [player, interval, running, isActive]);

  return (
    <div className="App">
      <img src={logo} />
      <div className="looper">
        {audio.map((item, key) => {
          const value = Object.values(item);
          const name = Object.keys(item);
          return (
            <Square timer={timer} audio={value[0]} name={name[0]} key={key} />
          );
        })}
      </div>
      <PlayBar setTimer={setTimer} />
    </div>
  );
}

export default App;
