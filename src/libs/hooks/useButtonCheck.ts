import { useEffect, useRef } from "react";

export const useVisibilityTrigger = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  useEffect(() => {
    setTimeout(() => {
      console.log(buttonRef.current);
      buttonRef.current?.classList.add("visible");
    }, 3000)
    const handleScroll = () => {
      if (!targetRef.current?.offsetTop) return;
      console.log("Ahora, este es la etiqueta a: ", buttonRef.current);
      if (window.pageYOffset >= targetRef.current.offsetTop) {
        buttonRef.current?.classList.add("visible")
      } else {
        buttonRef.current?.classList.remove("visible");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  });

  return {
    targetRef,
    buttonRef
  };
};
