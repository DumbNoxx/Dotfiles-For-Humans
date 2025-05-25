import { Title, SubTitle, Svg } from "@atomic/index";
import type { TitleBlockProps } from "@libs/index";

export const TitleBlock = ({
  title,
  subTitle,
  className = "",
}: TitleBlockProps) => {
  return (
    <>
      <section className={className}>
        <div className="block-title">
          <Title className="title-page" title={title} />
          <SubTitle
            className="subTitle-page"
            svg={<Svg nameSVG="check-line" />}
            subTitle={subTitle}
          />
        </div>
        <div className="chevron-down">
          <Svg nameSVG="chevron-up" />
        </div>
      </section>
    </>
  );
};
