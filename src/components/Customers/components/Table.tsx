import React from "react";

import { Customer } from "./Customer";
import type { OutputCustomerDTO } from "@dtos/customer-dto";

interface TableProps {
	customers: OutputCustomerDTO[];
}

export const Table = ({ customers }: TableProps) => {
	return (
		<table cellPadding="8" className="w-full">
			<thead className="border-y-2">
				<tr className="text-left text-xs sm:text-sm md:text-base">
					<th>ID</th>
					<th>Nome</th>
					<th>Email</th>
					<th>CEP</th>
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>
				{customers.map((customer, index) => (
					<Customer
						key={customer.id}
						{...customer}
						className={`${index % 2 === 0 && "bg-black/5"} `}
					/>
				))}
			</tbody>
		</table>
	);
};
