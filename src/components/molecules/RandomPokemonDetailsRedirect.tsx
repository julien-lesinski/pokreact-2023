import { Navigate } from "react-router-dom";
import { getRandomPokemonId } from "../../utilities/randomPokemonId";

export function RandomPokemonDetailsRedirect() {
  return <Navigate replace to={getRandomPokemonId().toString()} />;
}
