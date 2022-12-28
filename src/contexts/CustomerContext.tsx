import { createContext, ReactNode, useContext, useState } from "react";

import { useCustomers } from "@hooks/useCustomers";

import { customerServices } from "@services/customer-services";
import type {
	InputCreateCustomerDTO,
	InputEditCustomerDTO,
	OutputCustomerDTO,
} from "@dtos/customer-dto";

interface CustomerContextProperties {
	customers: OutputCustomerDTO[] | [];
	customerToEdit: OutputCustomerDTO | null;
	handleDelete: (id: number) => Promise<void>;
	handleCreate: (customer: InputCreateCustomerDTO) => Promise<void>;
	handleEdit: (customer: InputEditCustomerDTO) => Promise<void>;
	fillClientStateToEdit: (customer: OutputCustomerDTO) => void;
}

const CustomerContext = createContext({} as CustomerContextProperties);

export const CustomerContextProvider = (props: { children: ReactNode }) => {
	const [customerToEdit, setCustomerToEdit] =
		useState<null | OutputCustomerDTO>(null);
	const { customers, mutate } = useCustomers();

	const handleCreate = async (customer: InputCreateCustomerDTO) => {
		await customerServices.create(customer);
		mutate();
	};

	const handleDelete = async (id: number) => {
		await customerServices.delete(id);
		mutate();
	};

	const handleEdit = async (customer: InputEditCustomerDTO) => {
		await customerServices.edit(customer);
		mutate();

		setCustomerToEdit(null);
	};

	const fillClientStateToEdit = (customer: OutputCustomerDTO) =>
		setCustomerToEdit(customer);

	return (
		<CustomerContext.Provider
			value={{
				customers,
				customerToEdit,
				handleCreate,
				handleDelete,
				handleEdit,
				fillClientStateToEdit,
			}}
		>
			{props.children}
		</CustomerContext.Provider>
	);
};

export const useCustomersContext = () => useContext(CustomerContext);
