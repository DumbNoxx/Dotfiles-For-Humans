import { handleClick } from "@libs/helpers/index";
import { accordionManager } from "@libs/helpers/acorrdionManager";
import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";

export const useStylesQuit = () => {
  const targetButtonRef = useRef<HTMLButtonElement | null>(null);
  const svgTargetRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  // This manipulation of the DOM is temporary
  const setActiveWrapper: Dispatch<SetStateAction<boolean>> = (active) => {
    accordionManager.setActive(setActiveWrapper, active);
    setIsActive(active);
  };
  const { callback } = handleClick({ svgTargetRef, textRef, isActive, setIsActive: setActiveWrapper });
  useEffect(() => {
    const button = targetButtonRef.current;
    if (!button) return;
    button.addEventListener("click", callback);
    return () => button.removeEventListener("click", callback);
  }, [callback]);

  return {
    targetButtonRef,
    svgTargetRef,
    textRef
  }
};
