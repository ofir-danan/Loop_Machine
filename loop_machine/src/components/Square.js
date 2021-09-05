import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { running, stop } from "../redux/playReducer";

function Square({ audio, timer, name }) {
  const [on, setOn] = useState(false);
  const [music] = useState(new Audio(audio));

  const player = useSelector((state) => state.player.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    // change the global state for amount of running loops
    if (!on) {
      dispatch(running());
    } else {
      dispatch(stop());
    }
    // then change the local state
    setOn(!on);
  };

  useEffect(() => {
    if (on && player) {
      if (timer === 0 || timer % 800 === 0) {
        // if play is pressed and loop is on start the loop in the beginning of the interval
        // or in the next one
        music.play();
        music.loop = true;
      }
    } else {
      // if needs to be stop reset the loop to its beginning
      music.currentTime = 0;
      music.pause();
    }
  }, [on, music, player, timer, dispatch]);

  return (
    <div
      className={on ? "squareOn" : "squareOff"}
      onClick={() => handleClick()}
    >
      {!on && <span className="label">{name}</span>}
    </div>
  );
}

export default Square;
