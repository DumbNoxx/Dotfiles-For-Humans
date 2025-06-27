import { handleClick } from "@libs/helpers/handleClick";
import { useEffect, useRef, useState } from "react";
export const useStylesQuit = () => {
  const targetButtonRef = useRef<HTMLButtonElement | null>(null);
  const svgTargetRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  // This manipulation of the DOM is temporary
  const { callback } = handleClick({ svgTargetRef, textRef, isActive, setIsActive });
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
