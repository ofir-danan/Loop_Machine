import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Square({ audio }) {
  const [on, setOn] = useState(false);
  const [music] = useState(new Audio(audio));

  const player = useSelector((state) => state.player.value);

  useEffect(() => {
    if (on && player) {
      music.play();
      music.loop = true;
    } else {
      music.currentTime = 0;
      music.pause();
    }
  }, [on, music, player]);

  useEffect(() => {
    if (music.ended) {
      console.log("done");
    }
  }, [music]);

  return (
    <div
      className={on ? "squareOn" : "squareOff"}
      onClick={() => setOn(!on)}
    ></div>
  );
}

export default Square;
