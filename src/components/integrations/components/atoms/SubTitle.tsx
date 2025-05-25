import type { SubTitleAtomProds } from "@libs/index";

export const SubTitle = ({
  subTitle,
  svg,
  className = "",
}: SubTitleAtomProds) => {
  return (
    <>
      <div className="subTitle">
        {svg}
        <p className={className}>{subTitle}</p>
      </div>
    </>
  );
};
