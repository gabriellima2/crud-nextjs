import type { InputHTMLAttributes } from "react";
import type { Path } from "react-hook-form";

type DefaultAttr = Pick<
	InputHTMLAttributes<HTMLInputElement>,
	"placeholder" | "className" | "type" | "id"
>;

export interface Input<TField = {}> extends DefaultAttr {
	label: string;
	name: Path<TField>;
}
