import { useController, UseControllerProps } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

import { Error } from "@components/Error";
import { Label } from "@components/Label";
import { Input } from "@components/Input";

import type { Input as InputType } from "@global-types/Input";

export interface FieldProps<TField extends FieldValues>
	extends UseControllerProps<TField>,
		Omit<InputType<TField>, "defaultValue"> {}

export const Field = <TField extends {}>({
	label,
	placeholder,
	className,
	type,
	id,
	...props
}: FieldProps<TField>) => {
	const { field, fieldState } = useController(props);

	const hasError = !!fieldState.error;

	return (
		<div className="flex flex-col gap-1 md:gap-2">
			<Label className="flex flex-col gap-1 md:gap-0">
				{label}
				<Input
					type={type}
					id={id}
					placeholder={placeholder}
					className={className}
					{...field}
				/>
			</Label>

			{hasError && <Error message={fieldState.error?.message as string} />}
		</div>
	);
};
