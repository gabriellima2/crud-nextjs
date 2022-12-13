import { ICustomerRepository } from "src/repositories/icustomer-repository";

export class FindByIDCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = (id: string) => {
		const customer = this.repository.findByID(id);

		if (!customer) throw new Error("Cliente não encontrado");

		return customer;
	};
}
