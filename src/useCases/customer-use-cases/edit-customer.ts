import { ICustomerRepository } from "@repositories/icustomer-repository";
import { Customer } from "@domain/customer";

import { customerSchema } from "@yup/customer-schema";

export class EditCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = async (customer: Customer) => {
		const customerExists = this.repository.findByID(customer.id);
		if (!customerExists) throw new Error("Cliente não existe");

		const customerDataIsValid = await customerSchema.isValid(customer);
		if (!customerDataIsValid) throw new Error("Dados inválidos");

		const emailAlreadyExists = await this.repository.findByEmail(
			customer.email
		);
		if (emailAlreadyExists) throw new Error("Email já existe!");

		this.repository.edit(customer);
	};
}
