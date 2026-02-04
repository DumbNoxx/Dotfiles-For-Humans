import type { ButtonProps } from "@libs/index";
import { Svgs } from "@widget/index";

export const Button = ({ text, svg, className = "", href, reference, rel = "" }: ButtonProps) => {
  return (
    <>
      <a
        ref={reference}
        href={href}
        rel={rel}
        aria-label={text ? text : "Top button"}
        target={href?.startsWith("#") ? "" : "_blank"}
        className={`btn ${className}`}
      >
        <Svgs nameSVG={svg} className={svg} /> {text ? <span>{text}</span> : ""}
      </a>
    </>
  );
};


