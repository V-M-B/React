import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter >= 20) {
      alert("Can't go above 20 😴");
    } else {
      counter = counter + 1;
      setCounter(counter);
      // setCounter(counter+1) can u this way
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      alert("STOP 🥵");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur code in react</h1>

      <h2>Couter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>

      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
