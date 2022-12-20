import { customerSchema } from "@yup/customer-schema";

import type { ICustomerRepository } from "@repositories/customer-repository";
import type { InputCreateCustomerDTO } from "@dtos/customer-dto";

export class CreateCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = async (customer: InputCreateCustomerDTO) => {
		const customerDataIsValid = await customerSchema.isValid(customer);
		if (!customerDataIsValid) throw new Error("Dados inválidos");

		const emailAlreadyExists = await this.repository.findByEmail(
			customer.email
		);
		if (emailAlreadyExists) throw new Error("Email já existe!");

		return await this.repository.create(customer);
	};
}
