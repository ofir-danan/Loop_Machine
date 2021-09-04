import "./App.css";
import { useSelector } from "react-redux";

import Square from "./components/Square";
import PlayBar from "./components/PlayBar";
import audio from "./audio";
import { useEffect, useRef, useState } from "react";

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
          1000
        );
      }
    }
    if (!player || running <= 0) {
      clearInterval(interval.current);
      setIsActive(false);
      setTimer(0);
    }
  }, [player, interval, running, isActive]);

  useEffect(() => {
    console.log(timer);
  }, [timer]);

  return (
    <div className="App">
      <div className="looper">
        {audio.map((item, key) => {
          return <Square timer={timer} audio={item} key={key} />;
        })}
      </div>
      <PlayBar setTimer={setTimer} />
    </div>
  );
}

export default App;
