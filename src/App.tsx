import "./App.css";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { useState } from "react";
import { PokemonCard } from "./components/atoms/PokemonCard";
import { PokemonIdInput } from "./components/atoms/PokemonIdInput";
import { RandomPokemon } from "./components/molecules/RandomPokemon";
import { RandomColorText } from "./components/atoms/RandomColorText";

export default function App() {
  const [chosenPokemon, setChosenPokemon] = useState<Pokemon | undefined>();

  return (
    <div className="App flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold">
        <RandomColorText color1="white" color2="lightpink">
          Poké-react
        </RandomColorText>
      </h1>
      <div className="max-w-5xl flex flex-col items-center gap-4">
        <div className="flex flex-wrap gap-4 items-start">
          <RandomPokemon />
          <div className="flex flex-col rounded border p-4 bg-red-950">
            {chosenPokemon && <PokemonCard pokemon={chosenPokemon} />}
            <PokemonIdInput
              onIdSubmit={(id) =>
                new PokemonClient().getPokemonById(id).then(setChosenPokemon)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
