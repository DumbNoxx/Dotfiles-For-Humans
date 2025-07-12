import { open, close, removeAllHandle } from "@helpers/index";
import { useCallback } from "react";
import type { handleClickProps } from "@libs/index";

export const handleClick = ({ svgTargetRef, textRef, isActive, setIsActive }: handleClickProps) => {
  const callback = useCallback(() => {
    if (!(svgTargetRef || textRef)) return;
    const svg = svgTargetRef.current;
    const textDiv = textRef.current;
    if (!(textDiv && svg)) return;
    const buttons = document.querySelectorAll(".container-details");
    const svgs = document.querySelectorAll(".container-svg");
    setIsActive(!isActive);
    removeAllHandle(buttons, svgs);
    if (isActive) {
      close(textDiv, svg)
    } else {
      open(textDiv, svg);
    }
  }, [isActive, setIsActive]);
  return {
    callback
  }
}

