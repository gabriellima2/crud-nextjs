import type { ICustomerRepository } from "@repositories/customer-repository";
import { Customer } from "@domain/customer";

import { customerSchema } from "@yup/customer-schema";

export class EditCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = async (customer: Customer) => {
		const customerExists = await this.repository.findByID(customer.id);
		if (!customerExists) throw new Error("Cliente não existe");

		const customerDataIsValid = await customerSchema.isValid(customer);
		if (!customerDataIsValid) throw new Error("Dados inválidos");

		const emailExists = await this.repository.findByEmail(customer.email);
		if (emailExists && emailExists.id !== customerExists.id)
			throw new Error("Email já existe!");

		this.repository.edit(customer);
	};
}
