import { Pokemon } from "pokenode-ts";
import { create } from "zustand";
import { removeAt } from "../utilities/array";

interface PokemonTeamState {
  pokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => boolean;
  removePokemon: (pokemonIndex: number) => void;
  pokemonIsPartOfTeam: (pokemon: Pokemon) => boolean;
  teamIsFull: () => boolean;
}

export const usePokemonTeamStore = create<PokemonTeamState>((set, get) => ({
  pokemons: [],
  addPokemon(pokemon) {
    if(get().teamIsFull()) return false;
    set((state) => ({
      pokemons: [...state.pokemons, pokemon]
    }));
    return true;
  },
  removePokemon(pokemonIndex) {
    set((state) => ({
      pokemons: removeAt(state.pokemons, pokemonIndex)
    }))
  },
  pokemonIsPartOfTeam(pokemon) {
    return get().pokemons.find((teamPokemon) => teamPokemon.id === pokemon.id) !== undefined;
  },
  teamIsFull() {
    return get().pokemons.length >= 6;
  }
}))