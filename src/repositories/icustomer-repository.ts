import { Customer } from "@domain/customer";

export interface ICustomerRepository {
	create: (customer: Customer) => Promise<void>;
	findByID: (id: string) => Customer | null;
	findByEmail: (email: string) => Promise<Customer | null>;
	loadAll: () => Customer[];
	delete: (id: string) => void;
	edit: (customer: Customer) => Promise<void>;
}
