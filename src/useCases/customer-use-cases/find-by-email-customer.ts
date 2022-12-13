import { ICustomerRepository } from "@repositories/icustomer-repository";
import { customerEmailSchema } from "@yup/customer-schema";

export class FindByEmailCustomer {
	private repository: ICustomerRepository;

	constructor(repository: ICustomerRepository) {
		this.repository = repository;
	}

	execute = async (email: string) => {
		const emailIsValid = await customerEmailSchema.isValid({ email });
		if (!emailIsValid) throw new Error("Email inválido");

		const customer = this.repository.findByEmail(email);
		if (!customer) throw new Error("Email não encontrado");

		return customer;
	};
}
