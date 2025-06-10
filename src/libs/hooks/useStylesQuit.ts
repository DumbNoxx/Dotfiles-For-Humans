import { useEffect, useRef, useCallback } from "react";

export const useStylesQuit = () => {
  const targetButtonRef = useRef<HTMLButtonElement | null>(null);
  const svgTargetRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const handleClick = useCallback(() => {
    const svg = svgTargetRef.current;
    const textDiv = textRef.current;
    if (!(textDiv && svg)) return;
    textDiv.classList.toggle("visible");
    svg.classList.toggle("open");
  }, []);
  useEffect(() => {
    const button = targetButtonRef.current;
    if (!button) return;
    button.addEventListener("click", handleClick);
    return () => button.removeEventListener("click", handleClick);
  }, []);

  return {
    targetButtonRef,
    svgTargetRef,
    textRef
  }
};
