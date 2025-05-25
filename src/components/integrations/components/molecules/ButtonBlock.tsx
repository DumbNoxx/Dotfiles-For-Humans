import { Button, Svg } from "@atomic/index";
import type { ButtonBlockProps } from "@libs/index";

export const ButtonBlock = ({ text, className = "" }: ButtonBlockProps) => {
  return (
    <>
      <section className={className}>
        <div className="button-github">
          <Button
            className="btn-github"
            svg={<Svg nameSVG="github" />}
            text={text}
          />
        </div>
      </section>
    </>
  );
};
