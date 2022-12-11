import type { FormHTMLAttributes } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import type { AnyObjectSchema } from "yup";
import { useForm } from "react-hook-form";

import { MainButton, MainButtonProps } from "@components/Button";
import { Field } from "./components";

import type { Input } from "@global-types/Input";

type FormAttributes = Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit">;

interface BaseFormProps<TFormFields> extends FormAttributes {
	onSubmit: (data: TFormFields) => void;
	button: Omit<MainButtonProps, "type">;
	validationSchema: AnyObjectSchema;
	fields: { className?: string; items: Input<TFormFields>[] };
}

export const BaseForm = <TFormFields extends {}>({
	button,
	fields,
	onSubmit,
	validationSchema,
	...props
}: BaseFormProps<TFormFields>) => {
	const resolver = yupResolver(validationSchema);
	const { handleSubmit, control } = useForm<TFormFields>({
		resolver,
		mode: "onChange",
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} {...props}>
			<div className={fields.className}>
				{fields.items.map((field, index) => (
					<Field key={index} {...field} control={control} />
				))}
			</div>

			<MainButton type="submit" {...button} />
		</form>
	);
};
