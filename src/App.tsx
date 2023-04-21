import "./App.css";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { useState } from "react";
import { PokemonCard } from "./components/atoms/PokemonCard";

export default function App() {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  return (
    <div className="App flex flex-col items-center justify-center">
      <div className="max-w-5xl flex flex-col items-center gap-4">
        {pokemon && <PokemonCard pokemon={pokemon} />}
        <button
          className="border border-white rounded px-2 hover:bg-white/20 transition-colors"
          onClick={() =>
            new PokemonClient()
              .getPokemonById(Math.floor(Math.random() * 1010))
              .then(setPokemon)
          }
        >
          Another one!
        </button>
      </div>
    </div>
  );
}
