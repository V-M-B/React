import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./assets/components/card";

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    username: "vmb",
    ags: 21,
  };

  return (
    <>
      <h1 className="bg-green-500 mb-5">Tailwind Test</h1>
      <Card username="coffe with code" />
      <Card username="Tea with code" />
    </>
  );
}

export default App;
