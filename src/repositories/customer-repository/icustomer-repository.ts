import type { Customer, DBCustomer } from "@domain/customer";

export interface ICustomerRepository {
	create: (customer: DBCustomer) => Promise<Customer>;
	findByID: (id: number) => Promise<Customer | undefined | null>;
	findByEmail: (email: string) => Promise<Customer | undefined | null>;
	loadAll: () => Promise<Customer[] | []>;
	delete: (id: number) => Promise<Customer>;
	edit: (id: number, customer: DBCustomer) => Promise<Customer>;
}
