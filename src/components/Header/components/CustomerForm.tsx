import { SubmitHandler } from "react-hook-form";

import { useCustomersContext } from "@contexts/CustomerContext";

import { BaseForm } from "@components/BaseForm";

import { customerSchema } from "@yup/customer-schema";

import type { CustomerFields } from "@global-types/CustomerFields";
import type { InputCreateCustomerDTO } from "@dtos/customer-dto";
import type { Input } from "@global-types/Input";

const fields: Input<CustomerFields>[] = [
	{
		name: "name",
		label: "nome",
		id: "name",
		type: "text",
		defaultValue: "",
		placeholder: "Digite o nome",
	},
	{
		name: "email",
		label: "email",
		id: "email",
		type: "email",
		defaultValue: "",
		placeholder: "Digite o email",
	},
	{
		name: "zipCode",
		label: "CEP",
		id: "zipCode",
		type: "text",
		defaultValue: "",
		placeholder: "Digite o CEP",
	},
];

export const CustomerForm = () => {
	const { handleCreate } = useCustomersContext();

	const handleSubmit: SubmitHandler<CustomerFields> = async (data) => {
		if (Object.values(data).some((value) => value === "")) return;

		await handleCreate(data as unknown as InputCreateCustomerDTO);
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
