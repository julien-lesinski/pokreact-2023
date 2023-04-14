import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Green, On } from "./components/atoms/green";
import { Off, Red } from "./components/atoms/red";
import { Blue } from "./components/atoms/blue";
import { Color } from "./models/color";

function App() {
  const color: Color = Color.Blue;

  return (
    <div className="App flex flex-col items-center justify-center">
      <div className="max-w-5xl flex flex-col items-start text-left gap-4">
        <p>Current value: {color}</p>
        <div>
          <p>if (same color)</p>
          <div className="flex items-center">
            {color === Color.Red && <Red />}
            {color === Color.Green && <Green />}
            {color === Color.Blue && <Blue />}
          </div>
        </div>
        <div>
          <p>if-else</p>
          <div>
            {color === Color.Blue
              ? "I like blue."
              : "Whatever this is, this is not blue"}
          </div>
        </div>
        <div>
          <p>if-else-if-else</p>
          <div>The current color seems to be {extractColorName(color)}.</div>
        </div>
      </div>
    </div>
  );
}

function extractColorName(color: Color): string {
  switch (color) {
    case Color.Red:
      return "RED";
    case Color.Green:
      return "GREEN";
    case Color.Blue:
      return "BLUE";
    default:
      throw new Error("unknown color");
  }
}

export default App;
