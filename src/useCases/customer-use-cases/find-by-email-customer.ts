import { ICustomerRepository } from "src/repositories/icustomer-repository";

export class FindByEmailCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = (email: string) => {
		const customer = this.repository.findByEmail(email);

		if (!customer) throw new Error("Email não encontrado");

		return customer;
	};
}
