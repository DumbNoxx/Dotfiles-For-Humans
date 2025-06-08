import { useVisibilityTrigger } from "@libs/client";
export const CardHeaderRef = () => {
  const { targetRef } = useVisibilityTrigger();
  return (
    <>
      <div ref={targetRef}></div>
    </>
  )
}
