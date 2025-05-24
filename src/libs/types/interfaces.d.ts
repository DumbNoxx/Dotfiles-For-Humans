// Atoms

export interface ButtonProps {
  text?: string;
  svg?: JSX.element;
  className?: string;
}

export interface SvgProps {
  nameSVG: string;
}

export interface SvgsJson {
  [key: string]: string;
}

export interface TitleAtom {
  title: string;
  className?: string;
}
