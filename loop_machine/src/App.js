import "./App.css";
import Square from "./components/Square";
import audio from "./audio";

function App() {
  return (
    <div className="App">
      <div className="looper">
        {audio.map((item, key) => {
          return <Square audio={item} key={key} />;
        })}
      </div>
    </div>
  );
}

export default App;
