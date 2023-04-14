import { Color } from "../../models/color";
import { Blue } from "./blue";
import { Green } from "./green";
import { Red } from "./red";

export interface ColorChipProps {
  color: Color;
}

export function ColorChip(props: ColorChipProps) {
  switch (props.color) {
    case Color.Red:
      return <Red />;
    case Color.Green:
      return <Green />;
    case Color.Blue:
      return <Blue />;
    default:
      throw new Error("Unknown color");
  }
}
