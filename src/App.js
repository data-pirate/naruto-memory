import React, {useState} from "react";
import "./App.css";
import Cards from "./components/Cards"
import Header from "./components/Header";
import Scores from "./components/Scores";

function App() {  
  const [selected, updateSelected] = useState([]);

  const[rightGuess, updateRightGuess] = useState(0);
  const[highScore, updateHighScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <Scores highScore={highScore} currScore = {rightGuess}/>
      <Cards selected = {selected}
            updateSelected = {updateSelected}
            updateHighScore={updateHighScore}
            updateRightGuess={updateRightGuess}
            highScore = { highScore }
            currScore = {rightGuess}
            />
    </div>
  );
}

export default App;
