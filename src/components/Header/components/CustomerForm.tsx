import { SubmitHandler } from "react-hook-form";

import { useCustomersContext } from "@contexts/CustomerContext";

import { BaseForm } from "@components/BaseForm";

import { customerSchema } from "@yup/customer-schema";

import type { CustomerFields } from "@global-types/CustomerFields";
import type { Input } from "@global-types/Input";

const fields: Input<CustomerFields>[] = [
	{
		name: "name",
		label: "nome",
		id: "name",
		type: "text",
		placeholder: "Digite o nome",
	},
	{
		name: "email",
		label: "email",
		id: "email",
		type: "email",
		placeholder: "Digite o email",
	},
	{
		name: "zipCode",
		label: "CEP",
		id: "zipCode",
		type: "text",
		placeholder: "Digite o CEP",
	},
];

export const CustomerForm = () => {
	const { handleCreate, customerToEdit, handleEdit } = useCustomersContext();

	const handleSubmit: SubmitHandler<CustomerFields> = async (data) => {
		if (Object.values(data).some((value) => value === "")) return;

		if (!customerToEdit) {
			return await handleCreate(data);
		}

		await handleEdit({ ...data, id: customerToEdit.id });
	};

	return (
		<BaseForm<CustomerFields>
			fields={{
				items: fields,
				defaultValues: {
					email: customerToEdit?.email || "",
					name: customerToEdit?.name || "",
					zipCode: customerToEdit?.zipCode || "",
				},
				className: "w-full flex flex-col md:flex-row gap-4 mb-6",
			}}
			onSubmit={handleSubmit}
			validationSchema={customerSchema}
			button={{
				children: !customerToEdit ? "Adicionar" : "Editar",
				className: "w-full h-fit",
			}}
		/>
	);
};
