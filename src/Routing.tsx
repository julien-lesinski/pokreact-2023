import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { PokemonDetails } from "./components/pages/PokemonDetails";
import { MainTemplate } from "./components/templates/MainTemplate";
import { getRandomPokemonId } from "./utilities/randomPokemonId";
import { RandomPokemonDetailsRedirect } from "./components/molecules/RandomPokemonDetailsRedirect";

export function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainTemplate />}>
          <Route index element={<Home />} />
          <Route path="details">
            <Route index element={<RandomPokemonDetailsRedirect />} />
            <Route path=":pokemonId" element={<PokemonDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
