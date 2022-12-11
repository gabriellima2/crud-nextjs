import { ButtonHTMLAttributes } from "react";

export interface MainButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const MainButton = (props: MainButtonProps) => (
	<button
		{...props}
		className={`${props.className} bg-accent text-white text-sm md:text-base py-2 px-3 rounded transition hover:brightness-90`}
	/>
);
