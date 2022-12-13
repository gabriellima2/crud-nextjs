import { ICustomerRepository } from "@repositories/icustomer-repository";

export class DeleteCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = async (id: number) => {
		await this.repository.delete(id);
	};
}
