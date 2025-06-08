import { useVisibilityTrigger } from "@libs/client";
import { Button } from "@widget/index";

export const ButtonCheckWrapper = () => {
  const { buttonRef } = useVisibilityTrigger();

  return (
    <>
      <Button
        ref={buttonRef}
        href="#cardHeader"
        svg="chevron-up"
        className={`btn-chevron-up`}
      />
    </>
  );
};
