import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { PokemonDetails } from "./components/pages/PokemonDetails";

export function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="details/:pokemonId" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
