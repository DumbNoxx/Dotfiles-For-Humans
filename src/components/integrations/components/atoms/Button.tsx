import type { ButtonProps } from "@libs/index";

export const Button = ({ text, svg }: ButtonProps) => {
  return (
    <>
      <button className="btn-test">{text}</button>
    </>
  );
};
