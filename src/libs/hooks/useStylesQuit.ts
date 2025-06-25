import { useEffect, useRef, useCallback, useState } from "react";

export const useStylesQuit = () => {
  const targetButtonRef = useRef<HTMLButtonElement | null>(null);
  const svgTargetRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  // This manipulation of the DOM is temporary
  const close = (textDiv: HTMLDivElement, svg: HTMLSpanElement) => {
    textDiv.classList.remove("visible");
    svg.classList.remove("open");
    setIsActive(false);
  }
  const open = (textDiv: HTMLDivElement, svg: HTMLSpanElement) => {
    textDiv.classList.add("visible");
    svg.classList.add("open");
    setIsActive(true);
  }
  const handleClick = useCallback(() => {
    const svg = svgTargetRef.current;
    const textDiv = textRef.current;
    if (!(textDiv && svg)) return;
    const buttons = document.querySelectorAll(".container-details");
    const svgs = document.querySelectorAll(".container-svg");
    if (!isActive) {
      for (const button of buttons) button?.classList.remove("visible");
      for (const svg of svgs) svg?.classList.remove("open");
    }
    if (!isActive) {
      setTimeout(() => {
        open(textDiv, svg);
      }, 300);
    } else {
      close(textDiv, svg)
    }
    setIsActive(!isActive);
  }, [isActive]);
  useEffect(() => {
    const button = targetButtonRef.current;
    if (!button) return;
    button.addEventListener("click", handleClick);
    return () => button.removeEventListener("click", handleClick);
  }, [handleClick]);

  return {
    targetButtonRef,
    svgTargetRef,
    textRef
  }
};
