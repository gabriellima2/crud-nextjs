import React from "react";

import { useCustomersContext } from "@contexts/CustomerContext";

import { Error } from "@components/Error";
import { Table } from "./components";

export const Customers = () => {
	const { customers } = useCustomersContext();
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
