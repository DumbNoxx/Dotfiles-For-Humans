import { useEffect, useRef } from "react";

export const useVisibilityTrigger = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  useEffect(() => {
    const button = buttonRef.current;
    const target = targetRef.current;
    if (!button || !target) return;
    const handleScroll = () => button.classList.toggle("hidden", window.pageYOffset <= target.offsetTop);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetRef, buttonRef]);

  return {
    targetRef,
    buttonRef
  };
};
