import PokeballTop from "../../assets/images/pokeball_top.png";
import PokeballBottom from "../../assets/images/pokeball_bottom.png";
import { Pokemon } from "pokenode-ts";
import { Link, LinkProps } from "react-router-dom";

export interface PokeBallProps {
  pokemon: Pokemon;
  onContextMenu?: LinkProps["onContextMenu"];
}

export function PokeBall(props: PokeBallProps) {
  return (
    <Link
      to={`details/${props.pokemon.id}`}
      onContextMenu={props.onContextMenu}
    >
      <div
        className="h-8 w-8 stack group relative"
        title={props.pokemon.name.toUpperCase()}
      >
        {props.pokemon.sprites.front_default && (
          <img
            src={props.pokemon.sprites.front_default}
            className="transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all"
            alt=""
          />
        )}
        <img
          src={PokeballTop}
          alt=""
          className="absolute transform left-0 right-0 top-0 bottom-0 z-10 group-hover:-translate-y-4 transition-transform"
        />
        <img
          src={PokeballBottom}
          alt=""
          className="absolute left-0 right-0 top-0 bottom-0 z-10 transform group-hover:translate-y-4 transition-transform"
        />
      </div>
    </Link>
  );
}
