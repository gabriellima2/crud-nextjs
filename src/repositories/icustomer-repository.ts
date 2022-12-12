import { Customer } from "@domain/customer";

export interface ICustomerRepository {
	create: (customer: Customer) => void;
	findByID: (id: number) => Customer | null;
	findByEmail: (email: string) => Customer | null;
	loadAll: () => Customer[];
	delete: (id: number) => void;
	edit: (customer: Customer) => void;
}
