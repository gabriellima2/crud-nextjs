import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import type { AnyObjectSchema } from "yup";

import { MainButton, MainButtonProps } from "@components/Button";
import { Field } from "./components";

import type { Input } from "@global-types/Input";

interface BaseFormProps<TFormFields> {
	onSubmit: (data: TFormFields) => void;
	button: Omit<MainButtonProps, "type">;
	validationSchema: AnyObjectSchema;
	fields: Input<TFormFields>[];
}

export const BaseForm = <TFormFields extends {}>({
	button,
	fields,
	...props
}: BaseFormProps<TFormFields>) => {
	const resolver = yupResolver(props.validationSchema);
	const { handleSubmit, control } = useForm<TFormFields>({
		resolver,
		mode: "onChange",
	});

	return (
		<form onSubmit={handleSubmit(props.onSubmit)}>
			{fields.map((field, index) => (
				<Field key={index} {...field} control={control} />
			))}

			<MainButton type="submit" {...button} />
		</form>
	);
};
