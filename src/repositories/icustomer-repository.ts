import { Customer } from "@domain/customer";

export interface ICustomerRepository {
	create: (customer: Customer) => Promise<void>;
	findByID: (id: number) => Customer | null;
	findByEmail: (email: string) => Promise<Customer | null>;
	loadAll: () => Customer[];
	delete: (id: number) => void;
	edit: (customer: Customer) => Promise<void>;
}
