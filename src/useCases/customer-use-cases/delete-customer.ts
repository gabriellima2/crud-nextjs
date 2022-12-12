import { ICustomerRepository } from "src/repositories/icustomer-repository";

export class DeleteCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = (id: number) => {
		this.repository.delete(id);
	};
}
