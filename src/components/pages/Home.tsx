import { Pokemon, PokemonClient } from "pokenode-ts";
import { PokemonCard } from "../atoms/PokemonCard";
import { PokemonIdInput } from "../atoms/PokemonIdInput";
import { RandomPokemon } from "../molecules/RandomPokemon";
import { useState } from "react";

export function Home() {
  const [chosenPokemon, setChosenPokemon] = useState<Pokemon | undefined>();

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <div className="max-w-5xl flex flex-col items-center gap-4">
        <div className="flex flex-wrap gap-4 items-start">
          <RandomPokemon />
          <div className="flex flex-col rounded border p-4 bg-red-100 dark:bg-red-950">
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
