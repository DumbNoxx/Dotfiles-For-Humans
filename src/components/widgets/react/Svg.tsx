import type { SvgProps, SvgsJson } from "@libs/index";
import { svgsJson } from "@libs/json";

export const Svgs = ({ nameSVG, className = "", reference }: SvgProps) => {
  const svg: SvgsJson = svgsJson;
  return (
    <>
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-${nameSVG}-icon lucide-${nameSVG} svgImg ${className}`}
          dangerouslySetInnerHTML={{ __html: svg[nameSVG] }}
          ref={reference}
        ></svg>
      </figure>
    </>
  );
};
