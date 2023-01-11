import { createContext, ReactNode, useContext, useState } from "react";

import { useCustomers } from "@hooks/useCustomers";

import { customerServices } from "@services/customer-services";
import type {
	InputCreateCustomerDTO,
	InputEditCustomerDTO,
	OutputCustomerDTO,
} from "@dtos/customer-dto";
import { useToastContext } from "./ToastContext";

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
	const { showToast } = useToastContext();

	const handleCreate = async (customer: InputCreateCustomerDTO) => {
		const message = await customerServices.create(customer);
		mutate();
		showToast(message);
	};

	const handleDelete = async (id: number) => {
		const message = await customerServices.delete(id);
		mutate();
		showToast(message);
	};

	const handleEdit = async (customer: InputEditCustomerDTO) => {
		const message = await customerServices.edit(customer);
		mutate();
		showToast(message);
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
