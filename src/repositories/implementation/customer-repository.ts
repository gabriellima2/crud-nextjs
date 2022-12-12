import { Customer } from "@domain/customer";
import { ICustomerRepository } from "../icustomer-repository";

export class CustomerRepository implements ICustomerRepository {
	private customers: Customer[] | null;

	constructor() {
		this.customers = null;
	}

	loadAll = () => {
		console.log("Todos");

		return [
			{
				id: 0,
				name: "",
				email: "",
				zipCode: "",
				address: "",
			},
		];
	};

	create = (customer: Customer) => {
		console.log(customer);
	};

	delete = (id: number) => {
		console.log(id);
	};

	edit = (customer: Customer) => {
		console.log(customer);
	};

	findByID = (id: number) => {
		console.log(id);

		return {
			id: 0,
			name: "",
			email: "",
			zipCode: "",
			address: "",
		};
	};

	findByEmail = (email: string) => {
		console.log(email);

		return {
			id: 0,
			name: "",
			email: "",
			zipCode: "",
			address: "",
		};
	};
}
