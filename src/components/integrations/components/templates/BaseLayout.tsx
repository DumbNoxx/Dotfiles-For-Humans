import { CardHeader } from "@atomic/index";
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
            nameSvg={nameSvg}
          />
        </article>
      </div>
    </>
  );
};
