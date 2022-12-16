import { createContext, ReactNode, useContext } from "react";

import { useCustomers } from "@hooks/useCustomers";

import type { Customer } from "@domain/customer";
import { customerServices } from "@services/customer-services";

interface CustomerContextProperties {
	customers: Customer[] | [];
	handleDelete: (id: number) => void;
}

const CustomerContext = createContext({} as CustomerContextProperties);

export const CustomerContextProvider = (props: { children: ReactNode }) => {
	const { customers, mutate } = useCustomers();

	const handleDelete = async (id: number) => {
		await customerServices.delete(id);
		mutate();
	};

	return (
		<CustomerContext.Provider value={{ customers, handleDelete }}>
			{props.children}
		</CustomerContext.Provider>
	);
};

export const useCustomersContext = () => useContext(CustomerContext);
