import { Ability } from "pokenode-ts";
import { PokemonClient } from "pokenode-ts";
import { Pokemon } from "pokenode-ts";
import { useEffect, useState } from "react";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  const [abilitiesDetails, setAbilitiesDetails] = useState<
    Ability[] | undefined
  >();

  useEffect(() => {
    getPokemonFullAbility(pokemon).then(setAbilitiesDetails);
  }, [pokemon]);

  return (
    <div className="flex flex-col rounded border items-center">
      <div className="flex items-center gap-2 pr-2 self-stretch">
        <p className="border-r border-b rounded-br p-1">#{pokemon.id}</p>
        <p className="uppercase font-bold">{pokemon.name}</p>
      </div>

      <div className="flex gap-4 p-4">
        {pokemon.sprites.front_default && (
          <img
            src={pokemon.sprites.front_default}
            className="w-36 h-36"
            alt="sprite"
          />
        )}
        <div className="flex flex-col gap-2">
          {abilitiesDetails?.map((ability) => (
            <div
              key={ability.id}
              className="bg-gradient-to-r dark:from-red-900 dark:to-gray-800 from-gray-100 to-red-400 rounded px-1 cursor-help select-none"
              title={
                ability.effect_entries.find(
                  (entry) => entry.language.name === "en"
                )?.short_effect
              }
            >
              {ability.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

async function getPokemonFullAbility(pokemon: Pokemon): Promise<Ability[]> {
  const indexAbilities: [number, Ability][] = [];
  const promises: Promise<unknown>[] = [];
  const client = new PokemonClient();

  let index = 0;
  for (const partialAbility of pokemon.abilities) {
    const currentIndex = index;
    ++index;

    promises.push(
      client
        .getAbilityByName(partialAbility.ability.name)
        .then((ability) => indexAbilities.push([currentIndex, ability]))
    );
  }

  await Promise.all(promises);

  return indexAbilities
    .sort(([aIndex], [bIndex]) => aIndex - bIndex)
    .map(([, ability]) => ability);
}
