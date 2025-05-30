import { useVisibilityTrigger } from "@libs/client";
import { Button } from "@widget/index";

export const ButtonCheckWrapper = () => {
  const showButton = useVisibilityTrigger({
    elementId: "cardHeader",
    threshold: 0.1,
  });

  return (
    <>
      <Button
        href="#cardHeader"
        svg="chevron-up"
        className={`btn-chevron-up ${!showButton ? "out" : ""}`}
      />
    </>
  );
};
