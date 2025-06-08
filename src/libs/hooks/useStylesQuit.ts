import { useEffect, useState } from "react";

export const useStylesQuit = (elementId: string, elementId2: string) => {
  const [openDetails, setOpenDetails] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;

    const target = document.getElementById(elementId);
    const textDetail = document.getElementById(elementId2);
    if (!target) return;
    if (openDetails) {
      target.classList.toggle("open");
      textDetail?.classList.toggle("text-visible");
    }
  }, [openDetails]);
  return {
    openDetails,
    setOpenDetails,
  };
};
