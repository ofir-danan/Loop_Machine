import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import Square from "./components/Square";
import PlayBar from "./components/PlayBar";
import audio from "./audio";
import { useEffect } from "react";

function App() {
  const player = useSelector((state) => state.player.value);

  useEffect(() => {
    console.log(player);
  }, [player]);
  return (
    <div className="App">
      <div className="looper">
        {audio.map((item, key) => {
          return <Square audio={item} key={key} />;
        })}
      </div>
      <PlayBar />
    </div>
  );
}

export default App;
