import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { PokemonDetails } from "./components/pages/PokemonDetails";
import { MainTemplate } from "./components/templates/MainTemplate";
import { RandomPokemonDetailsRedirect } from "./components/molecules/RandomPokemonDetailsRedirect";
import { PageNotFound } from "./components/pages/PageNotFound";

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
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
