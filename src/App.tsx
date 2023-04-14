import "./App.css";
import { Color } from "./models/color";
import { ColorChip } from "./components/atoms/ColorChip/ColorChip";

function App() {
  const colors = drawSeveralRandomColors(5);

  return (
    <div className="App flex flex-col items-center justify-center">
      <div className="max-w-5xl flex items-start text-left gap-4">
        {colors.map((color, index) => (
          <ColorChip key={index} color={color} />
        ))}
      </div>
    </div>
  );
}

function drawRandomColor(): Color {
  const colors: Color[] = [Color.Red, Color.Green, Color.Blue];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function drawSeveralRandomColors(count: number): Color[] {
  const colors: Color[] = [];
  for (let i = 0; i < count; ++i) {
    colors.push(drawRandomColor());
  }
  return colors;
}

export default App;
