import { ICustomerRepository } from "src/repositories/icustomer-repository";

export class LoadAllCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = async () => {
		const customers = await this.repository.loadAll();

		if (customers.length === 0) throw new Error("Nenhum cliente encontrado");

		return customers;
	};
}
