import { ReactNode, useEffect, useRef } from "react";

export interface RandomColorTextProps {
  color1: string;
  color2: string;
  children: ReactNode;
}

export function RandomColorText(props: RandomColorTextProps) {
  const root = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (root.current === null) return;
    const rootElement = root.current;

    rootElement.style.color = props.color1;
    const intervalId = setInterval(() => {
      rootElement.style.color =
        rootElement.style.color === props.color2 ? props.color1 : props.color2;
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [props.color1, props.color2]);

  return (
    <span className="transition-colors duration-300" ref={root}>
      {props.children}
    </span>
  );
}
