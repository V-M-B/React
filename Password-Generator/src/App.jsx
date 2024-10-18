import { useState, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);  // Popup state

  const passwordRef = useRef("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+-={}|[]<>,.?/";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const cpyPasswordtoClipboard = useCallback(() => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        passwordRef.current?.select();
        setShowPopup(true);  // Show popup
        setTimeout(() => setShowPopup(false), 2000);  // Hide after 2 seconds
      }).catch((err) => {
        console.error("Failed to copy: ", err);
      });
    }
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-600 bg-gray-800 mb-8">
      <h1 className="text-4xl text-center text-white m-5">Password Generator</h1>

      <div className="flex items-center gap-2 mb-8">
        <input
          type="text"
          value={password}
          readOnly
          className="rounded-lg outline-none w-full py-2 px-3"
          placeholder="Generated Password"
          ref={passwordRef}
        />
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded"
          onClick={cpyPasswordtoClipboard}
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
          />
          <label>Include Numbers</label>

          <input
            type="checkbox"
            checked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
          />
          <label>Include Symbols</label>
        </div>
      </div>

      <button
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        onClick={passwordGenerator}
      >
        Generate Password
      </button>

      {/* Popup notification */}
      {showPopup && (
        <div className="popup">
          Password copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default App;
