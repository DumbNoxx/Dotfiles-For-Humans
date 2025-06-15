// Atoms

export interface ButtonProps {
  text?: string;
  svg?: JSX.element;
  className?: string;
  href?: string | undefined;
  reference?: React.RefObject;
}

export interface SvgProps {
  nameSVG: string;
  className?: string;
  reference?: React.RefObject;
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

export interface CardExpProps {
  title1: string;
  title2: string;
  title3: string;
  className?: string;
}

// Templates
export interface PageLayoutProps {
  title: string;
  subTitle: string;
  nameSvg: string;
  className?: string;
  textButton: string;
  titleBack: string;
  titleExp: string;
  titleApro: string;
}


// Widgets
export interface ShowMoreProps {
  title: string;
  details?: string;
  details2?: string;
  className?: string;
  id?: string;
  idText?: string;
  mapeo?: string[];
}

export interface ButtonCheckWrapperProps {
  reference?: React.RefObject;
}

export interface NavLeftProps {
  id: string;
  listNav: string[];
  className?: string;
}
