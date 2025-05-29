import type { ButtonProps } from "@libs/index";
import { Svgs } from "@widget/index";

export const Button = ({ text, svg, className = "", href }: ButtonProps) => {
  return (
    <>
      <a href={href} target="_blank" className={`btn ${className}`}>
        <Svgs nameSVG={svg} /> {text}
      </a>
    </>
  );
};
