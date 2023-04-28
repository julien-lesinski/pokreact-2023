import PokeballTop from "../../assets/images/pokeball_top.png";
import PokeballBottom from "../../assets/images/pokeball_bottom.png";

export function PokeBallIcon() {
  return (
    <div className="h-4 w-4 stack group transform transition-transform hover:rotate-6">
      <img src={PokeballTop} alt="" />
      <img src={PokeballBottom} alt="" />
    </div>
  );
}
