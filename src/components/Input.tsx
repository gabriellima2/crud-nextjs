import type { InputHTMLAttributes } from "react";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
	<input
		{...props}
		className={`${props.className} py-1 px-2 rounded border-2 text-sm md:text-base font-normal border-util`}
	/>
);
