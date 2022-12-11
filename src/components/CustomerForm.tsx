import { SubmitHandler } from "react-hook-form";

import { BaseForm } from "./BaseForm";

import { customerSchema } from "@yup/customer-schema";

import type { CustomerFields } from "@global-types/CustomerFields";
import type { Input } from "@global-types/Input";

const fields: Input<CustomerFields>[] = [
	{ name: "name", label: "nome", id: "name", type: "text", defaultValue: "" },
	{
		name: "email",
		label: "email",
		id: "email",
		type: "email",
		defaultValue: "",
	},
	{
		name: "zipCode",
		label: "CEP",
		id: "zipCode",
		type: "text",
		defaultValue: "",
	},
];

export const CustomerForm = () => {
	const handleSubmit: SubmitHandler<CustomerFields> = (data) => {
		console.log(data);
	};

	return (
		<BaseForm<CustomerFields>
			fields={{
				items: fields,
				className: "w-full flex flex-col md:flex-row gap-4 mb-6",
			}}
			onSubmit={handleSubmit}
			validationSchema={customerSchema}
			button={{ children: "Adicionar", className: "w-full h-fit" }}
		/>
	);
};
