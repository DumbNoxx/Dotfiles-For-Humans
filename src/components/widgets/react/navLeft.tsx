import type { NavLeftProps } from "@libs/index";
import { useScrollActive } from "@libs/client";
export const NavLeft = ({ id, className = "", listNav }: NavLeftProps) => {
	const { itemsRef } = useScrollActive();
	return (
		<div className={className}>
			{listNav?.map((id: string, index: number) => {
				return (
					<a
						id={`nav-${id}`}
						href={`#${id}`}
						className={id}
						aria-label={`Move to ${id}`}
						ref={(el) => {
							itemsRef.current[index] = el;
						}}
						key={id}
					>
						<div className="buttonNav"></div>
					</a>
				);
			})}
		</div>
	);
};
