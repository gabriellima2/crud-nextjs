import React from "react";

import { Error } from "@components/Error";
import { Table } from "./components";

import type { Customer as ICustomer } from "@domain/customer";

interface CustomersProps {
	customers: ICustomer[] | [];
}

export const Customers = ({ customers }: CustomersProps) => {
	const hasNoRegisteredCustomers = customers.length === 0;

	return (
		<>
			{hasNoRegisteredCustomers ? (
				<Error message="Nenhum cliente registrado encontrado" />
			) : (
				<Table customers={customers} />
			)}
		</>
	);
};
