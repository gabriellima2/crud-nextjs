import { FormHTMLAttributes, useEffect } from "react";
import { DeepPartial, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { AnyObjectSchema } from "yup";

import { MainButton, MainButtonProps } from "@components/Button";
import { Field } from "./components";

import type { Input } from "@global-types/Input";

type FormAttributes = Omit<
	FormHTMLAttributes<HTMLFormElement>,
	"onSubmit" | "defaultValue"
>;

interface BaseFormProps<TFormFields> extends FormAttributes {
	onSubmit: (data: TFormFields) => void;
	button: Omit<MainButtonProps, "type">;
	validationSchema: AnyObjectSchema;
	fields: {
		className?: string;
		items: Input<TFormFields>[];
		defaultValues: DeepPartial<TFormFields>;
	};
}

export const BaseForm = <TFormFields extends {}>({
	button,
	fields,
	onSubmit,
	validationSchema,
	...props
}: BaseFormProps<TFormFields>) => {
	const resolver = yupResolver(validationSchema);
	const { handleSubmit, control, reset } = useForm<TFormFields>({
		resolver,
		defaultValues: fields.defaultValues,
	});

	useEffect(() => reset({ ...fields.defaultValues }), [fields.defaultValues]);

	return (
		<form
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
			})}
			{...props}
		>
			<div className={fields.className}>
				{fields.items.map((field, index) => (
					<Field key={index} control={control} {...field} />
				))}
			</div>

			<MainButton type="submit" {...button} />
		</form>
	);
};
