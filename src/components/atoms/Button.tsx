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
        "border rounded px-2 bg-transparent dark:hover:bg-white/20 hover:bg-black/20 transition-colors" +
          className ?? ""
      }
      {...otherProps}
    />
  );
}
