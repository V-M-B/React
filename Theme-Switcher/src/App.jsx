import { createContext, useEffect, useState } from "react";

import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/Theme";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in Theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <h1 className="p-4 bg-pink-400 text-black text-4xl text-center">Theme-Switcher</h1>

      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* theme-btn */}
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* card */}
              <Card/>
              </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
