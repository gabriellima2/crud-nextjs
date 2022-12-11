import type { LabelHTMLAttributes } from "react";

export const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => (
	<label
		{...props}
		className={`${props.className} capitalize font-medium text-xs md:text-sm`}
	/>
);
