import type { ButtonProps } from "@libs/index";

export const Button = ({ text, svg, className = "" }: ButtonProps) => {
  return (
    <>
      <button className={`btn ${className}`}>
        {svg} {text}
      </button>
    </>
  );
};
