import type { ICustomerRepository } from "@repositories/customer-repository";

export class DeleteCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = async (id: number) => {
		return await this.repository.delete(id);
	};
}
