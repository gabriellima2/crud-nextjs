import {
	useController,
	UseControllerProps,
	FieldValues,
} from "react-hook-form";

import { Error } from "@components/Error";
import { Label } from "@components/Label";
import { Input } from "@components/Input";

import type { Input as InputType } from "@global-types/Input";

export interface FieldProps<TField extends FieldValues>
	extends Pick<UseControllerProps<TField>, "name" | "control">,
		InputType<TField> {}

export const Field = <TField extends FieldValues>({
	label,
	control,
	name,
	...props
}: FieldProps<TField>) => {
	const { field, fieldState } = useController({
		control,
		name,
	});

	const hasError = !!fieldState.error;

	return (
		<div className="flex flex-col gap-1 md:gap-2">
			<Label className="flex flex-col gap-1 md:gap-0">
				{label}
				<Input
					{...props}
					name={field.name}
					value={field.value}
					onBlur={field.onBlur}
					onChange={field.onChange}
				/>
			</Label>

			{hasError && <Error message={fieldState.error?.message as string} />}
		</div>
	);
};
