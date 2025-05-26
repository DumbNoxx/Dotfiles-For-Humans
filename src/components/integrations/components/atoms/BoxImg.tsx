import type { BoxIgmProps } from "@libs/index";

export const BoxImg = ({ label, img, className = "" }: BoxIgmProps) => {
  return (
    <>
      <div className={className}>
        <div className="project">
          <label>{label}</label>
          <figure className="box-imagen">
            <img src={img} alt={label} />
          </figure>
        </div>
      </div>
    </>
  );
};
