import { ICustomerRepository } from "@repositories/icustomer-repository";
import { Customer } from "@domain/customer";

export class EditCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = (customer: Customer) => {
		const customerExists = this.repository.findByID(customer.id);

		if (!customerExists) throw new Error("Cliente não existe");

		if (!customer.email) return this.repository.create(customer);

		const emailAlreadyExists = this.repository.findByEmail(customer.email);

		if (emailAlreadyExists) throw new Error("Email já existe!");

		this.repository.edit(customer);
	};
}
