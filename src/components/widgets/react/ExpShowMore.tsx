import { Svgs } from "./Svg"
import type { ShowMoreProps } from "@libs/index"

export const ExpShowMore = ({ title, details,
  details2, className = "" }: ShowMoreProps) => {
  return (
    <div className={className}>
      <button className="btn-exp-show-more">
        {title}
        <span>
          <Svgs nameSVG="chevron-down" />
        </span>
      </button>
      <p>
        {details}
        <br />
        <br />
        {details2}
      </p>
    </div>
  )
}
