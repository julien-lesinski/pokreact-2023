import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export function Button(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  const { className, ...otherProps } = props;

  return (
    <button
      className={
        "border border-white rounded px-2 hover:bg-white/20 transition-colors " +
          className ?? ""
      }
      {...otherProps}
    />
  );
}
