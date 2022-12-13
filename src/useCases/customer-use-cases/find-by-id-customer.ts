import { ICustomerRepository } from "src/repositories/icustomer-repository";

export class FindByIDCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = async (id: number) => {
		const customer = await this.repository.findByID(id);

		if (!customer) throw new Error("Cliente não encontrado");

		return customer;
	};
}
