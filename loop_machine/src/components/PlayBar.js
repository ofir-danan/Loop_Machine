import React from "react";
import { Play, Pause, Record2, PlayFill } from "@styled-icons/bootstrap";
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
        <PlayFill size="45" />
      ) : (
        <Play size="45" onClick={() => handlePlay()} />
      )}
      <Pause size="45" onClick={() => handlePause()} />
      <Record2 size="45" />
    </div>
  );
}

export default PlayBar;
