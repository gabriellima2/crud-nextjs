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
				id: "0",
				name: "",
				email: "",
				zipCode: "",
				address: "",
			},
		];
	};

	create = async (customer: Omit<Customer, "id">) => {
		console.log(customer);
	};

	delete = (id: string) => {
		console.log(id);
	};

	edit = async (customer: Customer) => {
		console.log(customer);
	};

	findByID = (id: string) => {
		console.log(id);

		return {
			id: "0",
			name: "",
			email: "",
			zipCode: "",
			address: "",
		};
	};

	findByEmail = async (email: string) => {
		return {
			id: "0",
			name: "",
			email: "",
			zipCode: "",
			address: "",
		};
	};
}
