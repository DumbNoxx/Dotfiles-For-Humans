import { useVisibilityTrigger } from "@libs/client";
import { ButtonCheckWrapper } from "@widget/index";

export const CardHeaderRef = () => {
  const { targetRef, buttonRef } = useVisibilityTrigger();
  return (
    <>
      <div ref={targetRef}></div>
      <ButtonCheckWrapper reference={buttonRef} />
    </>
  )
}
