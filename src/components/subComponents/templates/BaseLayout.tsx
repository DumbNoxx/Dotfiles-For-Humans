import {
  CardHeader,
  Svg,
  ButtonBlock,
} from "src/components/subComponents/index";
import type { PageLayoutProps } from "@libs/index";

export const PageLayout = ({
  title,
  subTitle,
  nameSvg,
  className = "",
}: PageLayoutProps) => {
  return (
    <>
      <div className={className}>
        <article>
          <CardHeader
            className="card-header"
            title={title}
            subTitle={subTitle}
          />
        </article>
        <article>
          <div className="chevron-down-div">
            <Svg nameSVG={nameSvg} />
          </div>
        </article>
        <article>
          <ButtonBlock className="button-block" text="VIEW MY WORK IN GITHUB" />
        </article>
      </div>
    </>
  );
};
