// Atoms

export interface ButtonProps {
  text?: string;
  svg?: JSX.element;
  className?: string;
  href?: string | undefined;
}

export interface SvgProps {
  nameSVG: string;
}

export interface DetailsProps {
  summary: string;
  text: string;
  text2?: string;
  svg: string;
  className?: string;
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
  svgs?: JSX.Element;
  className?: string;
}

export interface BoxIgmProps {
  label: string;
  img?:
    | string
    | File
    | Blob
    | DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement> | HTMLImageElement>;
  className?: string;
}

export interface CardHeaderProps {
  title: string;
  subTitle: string;
  className?: string;
}

// Molecules

export interface ButtonBlockProps {
  text: string;
  className?: string;
}
export interface DetailsBlockProps extends DetailsProps {
  title: string;
  className2?: string;
}

// Templates
export interface PageLayoutProps {
  title: string;
  subTitle: string;
  nameSvg: string;
  className?: string;
  textButton: string;
}

// Types
export type UseVisibilityTriggerOptions = {
  elementId: string;
  rootMargin?: string;
  threshold?: number;
};
