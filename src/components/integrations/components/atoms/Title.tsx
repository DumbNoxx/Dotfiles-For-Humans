import type { TitleAtom } from "@libs/index";

export const Title = ({ title, className = "" }: TitleAtom) => {
  return (
    <>
      <h1 className={className}>{title}</h1>
    </>
  );
};
