import { Suspense } from "react";

import { Loading } from "@components/Loading";
import { Error } from "@components/Error";
import { Customer } from "./components";

import type { Customer as ICustomer } from "@domain/customer";

interface CustomersProps {
	customers: ICustomer[] | [];
}

export const Customers = ({ customers }: CustomersProps) => {
	const hasNoRegisteredCustomers = customers.length === 0;

	return (
		<Suspense fallback={<Loading />}>
			{hasNoRegisteredCustomers ? (
				<Error message="Nenhum cliente registrado encontrado" />
			) : (
				<ul>
					{customers.map((customer) => (
						<Customer key={customer.id} {...customer} />
					))}
				</ul>
			)}
		</Suspense>
	);
};
