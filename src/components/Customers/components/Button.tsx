import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => (
	<button
		{...props}
		className={`${props.className} border-2  p-1 md:p-2 text-sx md:text-base rounded transition hover:brightness-90`}
	/>
);
