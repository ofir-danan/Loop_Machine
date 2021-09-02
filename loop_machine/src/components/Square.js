import React, { useEffect, useState } from "react";

function Square({ audio }) {
  const [on, setOn] = useState(false);
  const [music, setMusic] = useState(new Audio(audio));

  useEffect(() => {
    if (on) {
      music.play();
    } else {
      music.currentTime = 0;
      music.pause();
    }
  }, [on, music]);
  return (
    <div
      className={on ? "squareOn" : "squareOff"}
      onClick={() => setOn(!on)}
    ></div>
  );
}

export default Square;
