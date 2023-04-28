import { Link } from "react-router-dom";
import "./Header.css";
import { PokemonTeam } from "../../organisms/PokemonTeam";

export function Header() {
  return (
    <div className="flex justify-start py-4 px-8 gap-4 bg-gray-200 dark:bg-gray-600 min-h-[4rem]">
      <div className="flex justify-start gap-4">
        <Link className="Header__link" to="/">
          Home
        </Link>
        <Link className="Header__link" to="/details">
          Details
        </Link>
      </div>
      <div className="grow"></div>
      <div className="-my-4 flex items-center overflow-x-auto">
        <PokemonTeam />
      </div>
    </div>
  );
}
