import "./App.css";
import { useTitle } from "./hooks/useTitle";
import { Routing } from "./Routing";

export default function App() {
  useTitle("PokéReact");

  return <Routing></Routing>;
}
