import { prismaClient } from "@services/prisma-client";

import type { ICustomerRepository } from "./icustomer-repository";
import type {
	InputCreateCustomerDTO,
	InputEditCustomerDTO,
} from "@dtos/customer-dto";

export class CustomerRepository implements ICustomerRepository {
	private repository: typeof prismaClient;

	constructor() {
		this.repository = prismaClient;
	}

	loadAll = async () => {
		try {
			return await this.repository.customer.findMany();
		} catch (err) {
			throw new Error((err as Error).message);
		} finally {
			this.repository.$disconnect();
		}
	};

	create = async (customer: InputCreateCustomerDTO) => {
		try {
			return await this.repository.customer.create({ data: customer });
		} catch (err) {
			throw new Error((err as Error).message);
		} finally {
			this.repository.$disconnect();
		}
	};

	delete = async (id: number) => {
		try {
			return await this.repository.customer.delete({ where: { id } });
		} catch (err) {
			throw new Error((err as Error).message);
		} finally {
			this.repository.$disconnect();
		}
	};

	edit = async (id: number, customer: InputEditCustomerDTO) => {
		try {
			return await this.repository.customer.update({
				where: { id },
				data: customer,
			});
		} catch (err) {
			throw new Error((err as Error).message);
		} finally {
			this.repository.$disconnect();
		}
	};

	findByID = async (id: number) => {
		try {
			return await this.repository.customer.findUnique({ where: { id } });
		} catch (err) {
			throw new Error((err as Error).message);
		} finally {
			this.repository.$disconnect();
		}
	};

	findByEmail = async (email: string) => {
		try {
			return await this.repository.customer.findUnique({ where: { email } });
		} catch (err) {
			throw new Error((err as Error).message);
		} finally {
			this.repository.$disconnect();
		}
	};
}
