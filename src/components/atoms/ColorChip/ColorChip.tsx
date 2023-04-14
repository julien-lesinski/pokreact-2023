import { Color } from "../../../models/color";
import { getColorRendering } from "./utilities";

export interface ColorChipProps {
  color: Color;
}

export function ColorChip(props: ColorChipProps) {
  const { classNameColor, label } = getColorRendering(props.color);

  return (
    <div
      className={
        "rounded-full text-white w-8 h-8 flex justify-center items-center font-bold " +
        classNameColor
      }
    >
      {label}
    </div>
  );
}
