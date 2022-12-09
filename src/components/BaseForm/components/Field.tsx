import { useController, UseControllerProps } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

import { Error } from "@components/Error";

import type { Input } from "@global-types/Input";

export interface FieldProps<TField extends FieldValues>
	extends UseControllerProps<TField>,
		Input<TField> {}

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
		<div>
			<label>
				{label}
				<input
					type={type}
					id={id}
					placeholder={placeholder}
					className={className}
					{...field}
				/>
			</label>
			{hasError && <Error message={fieldState.error?.message as string} />}
		</div>
	);
};
