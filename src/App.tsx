import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Green, On } from "./components/atoms/green";
import { Off, Red } from "./components/atoms/red";
import { Blue } from "./components/atoms/blue";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col items-start">{/* If example */}</div>

      <div className="flex items-center">
        <Red />
        <Green />
        <Blue />
      </div>
    </div>
  );
}

export default App;
