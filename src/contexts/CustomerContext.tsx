import { createContext, ReactNode, useContext } from "react";

import { useCustomers } from "@hooks/useCustomers";

import { customerServices } from "@services/customer-services";
import type {
	InputCreateCustomerDTO,
	OutputCustomerDTO,
} from "@dtos/customer-dto";

interface CustomerContextProperties {
	customers: OutputCustomerDTO[] | [];
	handleDelete: (id: number) => Promise<void>;
	handleCreate: (customer: InputCreateCustomerDTO) => Promise<void>;
}

const CustomerContext = createContext({} as CustomerContextProperties);

export const CustomerContextProvider = (props: { children: ReactNode }) => {
	const { customers, mutate } = useCustomers();

	const handleCreate = async (customer: InputCreateCustomerDTO) => {
		await customerServices.create(customer);
		mutate();
	};

	const handleDelete = async (id: number) => {
		await customerServices.delete(id);
		mutate();
	};

	return (
		<CustomerContext.Provider value={{ customers, handleCreate, handleDelete }}>
			{props.children}
		</CustomerContext.Provider>
	);
};

export const useCustomersContext = () => useContext(CustomerContext);
