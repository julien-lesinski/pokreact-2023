import "./App.css";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { useEffect, useState } from "react";
import { PokemonCard } from "./components/atoms/PokemonCard";
import { PokemonIdInput } from "./components/atoms/PokemonIdInput";
import { Button } from "./components/atoms/Button";

export default function App() {
  const [randomPokemon, setRandomPokemon] = useState<Pokemon | undefined>();
  const [chosenPokemon, setChosenPokemon] = useState<Pokemon | undefined>();

  useEffect(() => {
    new PokemonClient()
      .getPokemonById(getRandomPokemonId())
      .then(setRandomPokemon);
  }, []);

  return (
    <div className="App flex flex-col items-center justify-center">
      <div className="max-w-5xl flex flex-col items-center gap-4">
        <div className="flex flex-wrap gap-4 items-start">
          <div className="flex flex-col rounded border p-4 gap-2 bg-blue-950">
            {randomPokemon && <PokemonCard pokemon={randomPokemon} />}
            <Button
              onClick={() =>
                new PokemonClient()
                  .getPokemonById(getRandomPokemonId())
                  .then(setRandomPokemon)
              }
            >
              Another one!
            </Button>
          </div>
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

function getRandomPokemonId(): number {
  return Math.floor(Math.random() * 1010);
}
