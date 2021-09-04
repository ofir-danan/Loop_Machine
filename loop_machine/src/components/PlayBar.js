import React from "react";
import { Play, Pause, PauseFill, PlayFill } from "@styled-icons/bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { pause, play, stop } from "../redux/playReducer";

function PlayBar({ setTimer }) {
  const player = useSelector((state) => state.player.value);
  const dispatch = useDispatch();

  const handlePause = () => {
    dispatch(pause());
    dispatch(stop());
    setTimer(0);
  };

  const handlePlay = () => {
    dispatch(play());
  };

  return (
    <div>
      {player ? (
        <>
          <PlayFill color="#76ff03" size="45" />
          <Pause size="45" onClick={() => handlePause()} />
        </>
      ) : (
        <>
          <Play size="45" onClick={() => handlePlay()} />
          <PauseFill
            size="45"
            color="rgb(250, 46, 46)"
            onClick={() => handlePause()}
          />
        </>
      )}
    </div>
  );
}

export default PlayBar;
