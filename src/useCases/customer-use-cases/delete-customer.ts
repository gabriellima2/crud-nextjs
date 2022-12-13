import { ICustomerRepository } from "@repositories/icustomer-repository";

export class DeleteCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = (id: string) => {
		this.repository.delete(id);
	};
}
