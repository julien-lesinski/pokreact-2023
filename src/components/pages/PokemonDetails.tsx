import { Pokemon, PokemonClient } from "pokenode-ts";
import { useEffect, useState } from "react";
import { PokemonCard } from "../atoms/PokemonCard";
import { useParams } from "react-router-dom";

export function PokemonDetails() {
  const { pokemonId: pokemonIdUrl } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  useEffect(() => {
    const pokemonId = pokemonIdUrl ? parseInt(pokemonIdUrl) : NaN;
    if (!isNaN(pokemonId)) {
      new PokemonClient().getPokemonById(pokemonId).then(setPokemon);
    }
  }, [pokemonIdUrl]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}
