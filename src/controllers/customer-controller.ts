import { NextApiResponse } from "next";

import { Customer } from "@domain/customer";

import {
	CustomerRepository,
	ICustomerRepository,
} from "@repositories/customer-repository";

import {
	LoadAllCustomer,
	CreateCustomer,
	DeleteCustomer,
	EditCustomer,
	FindByEmailCustomer,
	FindByIDCustomer,
} from "@use-cases/customer-use-cases";

import type {
	CreateCustomerRequest,
	FindByEmailRequest,
	FindByIDRequest,
	HandleCustomerRequest,
} from "@protocols/customer-request-params";

export class CustomerController {
	private repository: ICustomerRepository;

	constructor() {
		this.repository = new CustomerRepository();
	}

	loadAll = async (_: unknown, res: NextApiResponse<Customer[] | {}>) => {
		const loadAllCustomerCase = new LoadAllCustomer(this.repository);

		try {
			const customers = await loadAllCustomerCase.execute();

			res.status(200).json(customers);
		} catch (err) {
			res.status(404).send("Erro, nenhum cliente encontrado");
		}
	};

	create = async (req: CreateCustomerRequest, res: NextApiResponse) => {
		const customer = req.body;
		const createCustomerCase = new CreateCustomer(this.repository);

		try {
			await createCustomerCase.execute(customer);

			res.status(200).json("Cliente criado com sucesso!");
		} catch (err) {
			res.status(404).send("Erro, não foi possivel criar o cliente");
		}
	};

	delete = async (req: HandleCustomerRequest, res: NextApiResponse) => {
		const { id } = req.query;
		const deleteCustomerCase = new DeleteCustomer(this.repository);

		try {
			await deleteCustomerCase.execute(Number(id));

			res.status(200).json("Cliente deletado com sucesso!");
		} catch (err) {
			res.status(404).send("Erro, não foi possível deletar o cliente");
		}
	};

	edit = async (req: HandleCustomerRequest, res: NextApiResponse) => {
		const { id } = req.query;
		const customer = req.body;
		const editCustomerCase = new EditCustomer(this.repository);

		try {
			await editCustomerCase.execute(Number(id), customer);

			res.status(200).json("Cliente editado com sucesso!");
		} catch (err) {
			res.status(404).send("Erro, não foi possível editar o cliente");
		}
	};

	findByID = async (
		req: FindByIDRequest,
		res: NextApiResponse<Customer | {}>
	) => {
		const { id } = req.query;
		const findByIDCustomerCase = new FindByIDCustomer(this.repository);

		try {
			const customer = await findByIDCustomerCase.execute(Number(id));

			res.status(200).json(customer);
		} catch (err) {
			res.status(404).send("Erro, cliente não encontrado");
		}
	};

	findByEmail = async (
		req: FindByEmailRequest,
		res: NextApiResponse<Customer | {}>
	) => {
		const { email } = req.body;
		const findByEmailCustomerCase = new FindByEmailCustomer(this.repository);

		try {
			const customer = await findByEmailCustomerCase.execute(email);

			res.status(200).json(customer as Customer);
		} catch (err) {
			res.status(404).send("Erro, email não encontrado");
		}
	};
}
