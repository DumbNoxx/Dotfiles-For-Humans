import type { ShowMoreProps } from "@libs/index";
import { Svgs } from "@widget/index";
import { useStylesQuit } from "@libs/hooks/useStylesQuit";

export const ShowMore = ({
  title,
  details,
  details2,
  svg,
  className = "",
  id,
  idText,
}: ShowMoreProps) => {
  const { openDetails, setOpenDetails } = useStylesQuit(id, idText);
  return (
    <div className={className}>
      <button
        onClick={() => setOpenDetails(!openDetails)}
        id={id}
        className="show-more"
      >
        {title}
        <span>
          <Svgs nameSVG={svg} />
        </span>
      </button>
      <div className="text-description text-details" id={idText}>
        <p>
          {details}
          <br />
          {details2}
        </p>
      </div>
    </div>
  );
};
