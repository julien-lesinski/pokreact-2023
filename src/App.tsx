import "./App.css";
import { Color } from "./models/color";
import { ColorChip } from "./components/atoms/ColorChip/ColorChip";

function App() {
  const color: Color = Color.Blue;

  return (
    <div className="App flex flex-col items-center justify-center">
      <div className="max-w-5xl flex flex-col items-start text-left gap-4">
        <p>Current value: {extractColorName(color)}</p>
        <ColorChip color={color} />
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
