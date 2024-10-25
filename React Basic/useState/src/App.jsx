import { useState } from "react";
import "./App.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  //Like this we can not take raw variables
  //react only renders state variabl
  // function increaseCount() {
  //   count = count + 1;
  // }

  const [count, setCounter] = useState(0);

  function increaseCount() {
    setCounter(count + 1);
  }

  // function dCount() {
  //   setCounter((count = count - 1));
  // }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>

      <button onClick={dCount}>Decrease Count</button>
    </div>
  );
}
