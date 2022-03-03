import { useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

type Props = {
  move?: string;
  children: React.ReactNode;
};

export const ScrollRevealContainer = (props: Props) => {
  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current)
      scrollReveal().reveal(divRef.current, {
        reset: true,
        delay: 400,
        opacity: 0,
        origin:
          props.move === "left"
            ? "left"
            : props.move === "right"
            ? "right"
            : props.move === "top"
            ? "top"
            : "bottom",
        distance: "40px",
      });
  }, [divRef]);

  return <div ref={divRef}>{props.children}</div>;
};
