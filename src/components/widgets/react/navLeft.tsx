import type { NavLeftProps } from "@libs/index";

export const NavLeft = ({ id, className = "", listNav }: NavLeftProps) => {
  return (
    <div className={className}>
      {listNav?.map((id: string, index: number) => {
        return (
          <a href={`#${id}`} aria-label={`Move to ${id}`} key={index}>
            <div className="buttonNav"></div>
          </a>
        )
      })}
    </div >
  );
};
