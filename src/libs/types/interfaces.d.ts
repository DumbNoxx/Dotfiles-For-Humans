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

export interface SubTitleAtomProds {
  subTitle: string;
  svg?: JSX.Element;
  className?: string;
}

// Molecules

export interface TitleBlockProps {
  title: string;
  subTitle: string;
  className?: string;
}

export interface ButtonBlockProps {
  text: string;
  className?: string;
}

// Organism

export interface CardHeaderProps {
  title: string;
  subTitle: string;
  nameSvg: string;
  className?: string;
}

// Templates
export interface PageLayoutProps {
  title: string;
  subTitle: string;
  nameSvg: string;
  className?: string;
}
