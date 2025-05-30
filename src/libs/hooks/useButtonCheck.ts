import { useState, useEffect, useRef, type RefObject } from "react";
import type { UseVisibilityTriggerOptions } from "@libs/index";

export const useVisibilityTrigger = ({
  elementId,
  rootMargin = "0px",
  threshold = 0,
}: UseVisibilityTriggerOptions): boolean => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const target = document.getElementById(elementId);
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      setShowButton(!entry.isIntersecting);
    });

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [elementId, rootMargin, threshold]);

  return showButton;
};
