import { customerSchema } from "@yup/customer-schema";

import type { ICustomerRepository } from "@repositories/customer-repository";
import type { DBCustomer } from "@domain/customer";

export class EditCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = async (id: number, customer: DBCustomer) => {
		const customerDataIsValid = await customerSchema.isValid(customer);
		if (!customerDataIsValid) throw new Error("Dados inválidos");

		const customerEmail = await this.repository.findByEmail(customer.email);
		if (customerEmail && customerEmail.id !== id)
			throw new Error("Email já existe!");

		this.repository.edit(id, customer);
	};
}
