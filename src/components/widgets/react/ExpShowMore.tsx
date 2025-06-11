import { Svgs } from "./Svg";
import type { ShowMoreProps } from "@libs/index";
import { useStylesQuit } from "@libs/client";

export const ExpShowMore = ({ title, details,
  details2, className = "", mapeo }: ShowMoreProps) => {
  const { targetButtonRef, svgTargetRef, textRef } = useStylesQuit();
  return (
    <div className={className}>
      <button className="btn-exp-show-more" ref={targetButtonRef}>
        {title}
        <span className="container-svg" ref={svgTargetRef}>
          <Svgs nameSVG="chevron-down" />
        </span>
      </button>
      <div className="container-details" ref={textRef}>
        {details || details2 ?
          <p>
            {details}
            <br />
            {details2 ?
              details2
              :
              ""
            }
          </p>
          :
          <ul>
            {mapeo?.map((exp: string, index: number) => {
              return <li key={index}>{exp}</li>
            })}
          </ul>
        }
      </div>
    </div>
  );
}
