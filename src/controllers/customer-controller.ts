import type { NextApiRequest, NextApiResponse } from "next";

import { Customer } from "@domain/customer";

import { CustomerRepository } from "@repositories/implementation/customer-repository";
import { ICustomerRepository } from "@repositories/icustomer-repository";

import {
	LoadAllCustomer,
	CreateCustomer,
	DeleteCustomer,
	EditCustomer,
	FindByEmailCustomer,
	FindByIDCustomer,
} from "@use-cases/customer-use-cases";

interface CustomerApiRequest extends NextApiRequest {
	body: { customer: Customer };
}

interface SpecificCustomerApiRequest extends NextApiRequest {
	body: { id: number };
}

interface CustomerEmailApiRequest extends NextApiRequest {
	body: { email: string };
}

export class CustomerController {
	private repository: ICustomerRepository;

	constructor() {
		this.repository = new CustomerRepository();
	}

	loadAll = (req: NextApiRequest, res: NextApiResponse<Customer[] | {}>) => {
		const loadAllCustomerCase = new LoadAllCustomer(this.repository);

		try {
			const customers = loadAllCustomerCase.execute();

			res.status(200).json(customers);
		} catch (err) {
			res.status(404).send(err || "Erro, cliente não encontrado");
		}
	};

	create = async (req: CustomerApiRequest, res: NextApiResponse) => {
		const { customer } = req.body;
		const createCustomerCase = new CreateCustomer(this.repository);

		try {
			await createCustomerCase.execute(customer);

			res.status(200).json("Cliente criado com sucesso!");
		} catch (err) {
			res.status(404).send(err || "Erro, não foi possivel criar o cliente");
		}
	};

	delete = (req: SpecificCustomerApiRequest, res: NextApiResponse) => {
		const { id } = req.body;
		const deleteCustomerCase = new DeleteCustomer(this.repository);

		try {
			deleteCustomerCase.execute(id);

			res.status(200).json("Cliente deletado com sucesso!");
		} catch (err) {
			res.status(404).send(err || "Erro, não foi possível deletar o cliente");
		}
	};

	edit = async (req: CustomerApiRequest, res: NextApiResponse) => {
		const { customer } = req.body;
		const editCustomerCase = new EditCustomer(this.repository);

		try {
			await editCustomerCase.execute(customer);

			res.status(200).json("Cliente editado com sucesso!");
		} catch (err) {
			res.status(404).send(err || "Erro, não foi possível editar o cliente");
		}
	};

	findByID = (
		req: SpecificCustomerApiRequest,
		res: NextApiResponse<Customer | {}>
	) => {
		const { id } = req.body;
		const findByIDCustomerCase = new FindByIDCustomer(this.repository);

		try {
			const customer = findByIDCustomerCase.execute(id);

			res.status(200).json(customer);
		} catch (err) {
			res.status(404).send(err || "Erro, cliente não encontrado");
		}
	};

	findByEmail = async (
		req: CustomerEmailApiRequest,
		res: NextApiResponse<Customer | {}>
	) => {
		const { email } = req.body;
		const findByEmailCustomerCase = new FindByEmailCustomer(this.repository);

		try {
			const customer = await findByEmailCustomerCase.execute(email);

			res.status(200).json(customer as Customer);
		} catch (err) {
			res.status(404).send(err || "Erro, email não encontrado");
		}
	};
}