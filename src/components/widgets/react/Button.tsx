import { useVisibilityTrigger } from "@libs/client";
import type { ButtonProps } from "@libs/index";
import { Svgs } from "@widget/index";

export const Button = ({ text, svg, className = "", href, ref }: ButtonProps) => {
  const { buttonRef } = useVisibilityTrigger();
  return (
    <>
      <a
        ref={buttonRef}
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


