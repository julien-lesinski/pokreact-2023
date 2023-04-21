import { Pokemon } from "pokenode-ts";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;

  return (
    <div className="flex flex-col rounded border items-center">
      <div className="flex items-center gap-2 pr-2 self-stretch">
        <p className="border-r border-b rounded-br p-1">#{pokemon.id}</p>
        <p className="uppercase font-bold">{pokemon.name}</p>
      </div>

      {pokemon.sprites.front_default && (
        <img
          src={pokemon.sprites.front_default}
          className="w-36 h-36"
          alt="sprite"
        />
      )}
    </div>
  );
}
