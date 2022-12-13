import { Customer } from "@domain/customer";

export interface ICustomerRepository {
	create: (customer: Omit<Customer, "id">) => Promise<void>;
	findByID: (id: number) => Promise<Customer | null | undefined>;
	findByEmail: (email: string) => Promise<Customer | null | undefined>;
	loadAll: () => Promise<Customer[]>;
	delete: (id: number) => Promise<void>;
	edit: (customer: Customer) => Promise<void>;
}
