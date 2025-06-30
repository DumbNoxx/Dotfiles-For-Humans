import { useEffect, useRef, useCallback } from "react";

export const useVisibilityTrigger = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  // UseCallback 
  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return;
    const button = buttonRef.current;
    const target = targetRef.current;
    if (!(button && target)) return;
    button.classList.toggle("hidden", window.pageYOffset <= target.offsetTop);
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    targetRef,
    buttonRef
  };
};
