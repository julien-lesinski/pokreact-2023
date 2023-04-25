import { useEffect, useRef, useState } from "react";
import { PokemonCard } from "../atoms/PokemonCard";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { Button } from "../atoms/Button";

export function RandomPokemon() {
  const [randomPokemon, setRandomPokemon] = useState<Pokemon | undefined>();
  const previousPokemons = useRef<Pokemon[]>([]);

  const onPreviousClicked = () => {
    const previousPokemon = previousPokemons.current.pop();
    if (previousPokemon === undefined) {
      alert("There is no previous pokemon.");
      return;
    }
    setRandomPokemon(previousPokemon);
  };

  const onAnotherOneClicked = () => {
    if (randomPokemon !== undefined) {
      previousPokemons.current.push(randomPokemon);
    }
    new PokemonClient()
      .getPokemonById(getRandomPokemonId())
      .then(setRandomPokemon);
  };

  useEffect(() => {
    new PokemonClient()
      .getPokemonById(getRandomPokemonId())
      .then(setRandomPokemon);
  }, []);

  return (
    <div className="flex flex-col rounded border p-4 gap-2 bg-blue-950">
      {randomPokemon && <PokemonCard pokemon={randomPokemon} />}
      <div className="flex gap-2">
        <Button onClick={onPreviousClicked}>Please, come back!</Button>
        <Button onClick={onAnotherOneClicked}>Another one!</Button>
      </div>
    </div>
  );
}

function getRandomPokemonId(): number {
  return Math.floor(Math.random() * 1010);
}
