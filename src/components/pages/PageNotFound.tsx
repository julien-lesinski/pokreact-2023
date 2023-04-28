import TallGrassImg from "../../assets/images/tall_grass.png";

export function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center grow">
      <div className="flex items-center gap-8">
        <img src={TallGrassImg} alt="tall grass" />
        <div className="flex flex-col gap-0">
          <h1 className="text-2xl">404</h1>
          <h2 className="italic text-xl">
            Oops, someone got lost in tall grass.
          </h2>
        </div>
      </div>
    </div>
  );
}
