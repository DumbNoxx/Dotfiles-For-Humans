import type { TitleAtom } from "@libs/index";

export const Title = ({ title, className = "" }: TitleAtom) => {
  return (
    <>
      <div className="title">
        <h1 className={className}>{title}</h1>
      </div>
    </>
  );
};
