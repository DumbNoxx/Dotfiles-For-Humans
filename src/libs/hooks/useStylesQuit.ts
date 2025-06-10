import { useEffect, useRef, useCallback } from "react";

export const useStylesQuit = () => {
  const targetButtonRef = useRef<HTMLButtonElement | null>(null);
  const svgTargetRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  console.log(targetButtonRef.current, svgTargetRef.current, textRef.current)
  const handleClick = useCallback(() => {
    const svg = svgTargetRef.current;
    const textDiv = textRef.current;
    if (!(textDiv && svg)) return;
    console.log("hola")
    textDiv.classList.toggle("visible")
    svg.classList.toggle("open");
  }, []);
  useEffect(() => {
    const button = targetButtonRef.current;
    if (!button) return;
    button.addEventListener("click", handleClick);
    return () => button.removeEventListener("click", handleClick);
  }, [handleClick]);

  useEffect(() => {
    console.log("Refs after mount:", { targetButtonRef, svgTargetRef, textRef })
  }, [])
  return {
    targetButtonRef,
    svgTargetRef,
    textRef
  }
};
