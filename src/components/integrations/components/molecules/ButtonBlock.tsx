import { BoxImg, Button, Svg } from "@atomic/index";
import type { ButtonBlockProps } from "@libs/index";
import { creatureCodex } from "@assets/index";

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
        <div className="block-projects">
          <div>
            <BoxImg label="project-1" img={creatureCodex.src} />
            <BoxImg label="project-1" img={creatureCodex.src} />
            <BoxImg label="project-1" img={creatureCodex.src} />
          </div>
        </div>
      </section>
    </>
  );
};
