import { usePokemonTeamStore } from "../../stores/usePokemonTeamStore";
import { PokeBall } from "../atoms/PokeBall";

export function PokemonTeam() {
  const [pokemons, removePokemon] = usePokemonTeamStore((state) => [
    state.pokemons,
    state.removePokemon,
  ]);

  return (
    <div className="flex gap-4 justify-end">
      {pokemons.map((pokemon, index) => (
        <PokeBall
          key={index}
          pokemon={pokemon}
          onContextMenu={(ev) => {
            ev.preventDefault();
            removePokemon(index);
          }}
        />
      ))}
    </div>
  );
}
