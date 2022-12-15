import type { Customer, DBCustomer } from "@domain/customer";

export interface ICustomerRepository {
	create: (customer: DBCustomer) => Promise<void>;
	findByID: (id: number) => Promise<Customer | null | undefined>;
	findByEmail: (email: string) => Promise<Customer | null | undefined>;
	loadAll: () => Promise<Customer[]>;
	delete: (id: number) => Promise<void>;
	edit: (id: number, customer: DBCustomer) => Promise<void>;
}
