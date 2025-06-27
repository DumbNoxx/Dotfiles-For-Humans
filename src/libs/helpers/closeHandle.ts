export const close = (textDiv: HTMLDivElement, svg: HTMLSpanElement) => {
  textDiv.classList.remove("visible");
  svg.classList.remove("open");
}
