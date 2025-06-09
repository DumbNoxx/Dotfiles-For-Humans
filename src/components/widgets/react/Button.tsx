import type { ButtonProps } from "@libs/index";
import { Svgs } from "@widget/index";

export const Button = ({ text, svg, className = "", href, reference }: ButtonProps) => {
  return (
    <>
      <a
        ref={reference}
        href={href}
        aria-label={text ? text : "Top button"}
        target={href?.startsWith("#") ? "" : "_blank"}
        className={`btn ${className}`}
      >
        <Svgs nameSVG={svg} className={svg} /> {text}
      </a>
    </>
  );
};


