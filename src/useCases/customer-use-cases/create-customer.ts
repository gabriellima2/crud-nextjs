import { Customer } from "src/domain/customer";
import { ICustomerRepository } from "src/repositories/icustomer-repository";

export class CreateCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = (customer: Customer) => {
		if (!customer.email) return this.repository.create(customer);

		const emailAlreadyExists = this.repository.findByEmail(customer.email);

		if (emailAlreadyExists) throw new Error("Email já existe!");

		this.repository.create(customer);
	};
}
