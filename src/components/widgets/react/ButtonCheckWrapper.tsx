import type { ButtonCheckWrapperProps } from "@libs/index";
import { Button } from "@widget/index";

export const ButtonCheckWrapper = ({ reference }: ButtonCheckWrapperProps) => {

  return (
    <>
      <Button
        reference={reference}
        href="#cardHeader"
        svg="chevron-up"
        className={`btn-chevron-up hidden`}
      />
    </>
  );
};
