import { useVisibilityTrigger } from "@libs/client";
import { ButtonCheckWrapper } from "@widget/index";
import { NavLeft } from "./navLeft";


export const CardHeaderRef = () => {
  const listNav = [
    "cardHeader",
    "cardProject",
    "cardExp",
    "footer"
  ];
  const { targetRef, buttonRef } = useVisibilityTrigger();
  return (
    <>
      <div ref={targetRef}></div>
      <ButtonCheckWrapper reference={buttonRef} />
      <NavLeft id="cardHeader" className="navLeft" listNav={listNav} />
    </>
  )
}
