import { TitleBlock, Svg } from "@atomic/index";
import type { CardHeaderProps } from "@libs/index";

export const CardHeader = ({
  title,
  subTitle,
  nameSvg,
  className = "",
}: CardHeaderProps) => {
  return (
    <>
      <div className={className}>
        <div className="title-block-div">
          <TitleBlock
            title={title}
            subTitle={subTitle}
            className="title-block"
          />
        </div>
        <div className="chevron-down-div">
          <Svg nameSVG={nameSvg} />
        </div>
      </div>
    </>
  );
};
