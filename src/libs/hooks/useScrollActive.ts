import { useRef, useEffect, useCallback } from "react";

export const useScrollActive = () => {
	const itemsRef = useRef<Array<HTMLAnchorElement | null>>([]);
	const handleScrollList = useCallback(() => {
		if (typeof window === "undefined") return;
		const items = itemsRef.current;
		if (!items || items.length === 0) return;
		const scrollPosition = window.scrollY + 100;
		items.forEach((item) => {
			if (!item) return;
			const textId = item.href.indexOf("#");
			if (textId === -1) return;
			const id = item.href.substring(textId + 1);
			const element = document.getElementById(id);
			if (!element) return;
			const startElement = element.offsetTop;
			const heightElement = element.offsetHeight;
			const endElement = startElement + heightElement;
			const isActive =
				scrollPosition >= startElement && scrollPosition <= endElement;
			Array.from(item.children).forEach((child) => {
				child.classList.toggle("active", isActive);
			});
		});
	}, []);
	useEffect(() => {
		if (typeof window === "undefined") return;
		window.addEventListener("scroll", handleScrollList);
		handleScrollList();
		return () => window.removeEventListener("scroll", handleScrollList);
	}, [handleScrollList]);

	return {
		itemsRef,
	};
};
