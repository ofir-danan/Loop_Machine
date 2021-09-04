import React from "react";
import { Play, Pause, Record2, PlayFill } from "@styled-icons/bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "../redux/playReducer";

function PlayBar() {
  const player = useSelector((state) => state.player.value);
  const dispach = useDispatch();
  return (
    <div>
      {player ? (
        <PlayFill size="45" />
      ) : (
        <Play size="45" onClick={() => dispach(play())} />
      )}
      <Pause size="45" onClick={() => dispach(pause())} />
      <Record2 size="45" />
    </div>
  );
}

export default PlayBar;
