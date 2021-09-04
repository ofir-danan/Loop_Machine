import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { running, stop } from "../redux/playReducer";

function Square({ audio, timer }) {
  const [on, setOn] = useState(false);
  const [music] = useState(new Audio(audio));

  const player = useSelector((state) => state.player.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!on) {
      dispatch(running());
    } else {
      dispatch(stop());
    }
    setOn(!on);
  };

  useEffect(() => {
    if (on && player) {
      if (timer === 0 || timer % 8 === 0) {
        music.play();
        music.loop = true;
      }
    } else {
      music.currentTime = 0;
      music.pause();
    }
  }, [on, music, player, timer, dispatch]);

  return (
    <div
      className={on ? "squareOn" : "squareOff"}
      onClick={() => handleClick()}
    ></div>
  );
}

export default Square;
