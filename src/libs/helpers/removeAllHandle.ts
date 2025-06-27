export const removeAllHandle = (buttons: NodeListOf<Element>, svgs: NodeListOf<Element>) => {
  for (const button of buttons) button?.classList.remove("visible");
  for (const svg of svgs) svg?.classList.remove("open");
}
