import { NextApiResponse } from "next";

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
	EditCustomerRequest,
	CustomerResponse,
	SpecificCustomerRequest,
} from "@protocols/customer-protocols";

export class CustomerController {
	private repository: ICustomerRepository;

	constructor() {
		this.repository = new CustomerRepository();
	}

	loadAll = async (_: unknown, res: NextApiResponse<CustomerResponse>) => {
		const loadAllCustomerCase = new LoadAllCustomer(this.repository);

		try {
			const customers = await loadAllCustomerCase.execute();

			res.status(200).json({ data: customers });
		} catch (err) {
			res.status(500).json({ data: [], message: (err as Error).message });
		}
	};

	create = async (
		req: CreateCustomerRequest,
		res: NextApiResponse<CustomerResponse>
	) => {
		const customer = req.body;
		const createCustomerCase = new CreateCustomer(this.repository);

		try {
			const customerCreated = await createCustomerCase.execute(customer);

			res.status(201).json({
				data: [customerCreated],
				message: "Cliente criado com sucesso!",
			});
		} catch (err) {
			res.status(500).json({ data: [], message: (err as Error).message });
		}
	};

	delete = async (
		req: SpecificCustomerRequest,
		res: NextApiResponse<CustomerResponse>
	) => {
		const { id } = req.query;
		const deleteCustomerCase = new DeleteCustomer(this.repository);

		try {
			const customerDeleted = await deleteCustomerCase.execute(Number(id));

			res.status(200).json({
				data: [customerDeleted],
				message: "Cliente deletado com sucesso!",
			});
		} catch (err) {
			res.status(500).json({ data: [], message: (err as Error).message });
		}
	};

	edit = async (
		req: EditCustomerRequest,
		res: NextApiResponse<CustomerResponse>
	) => {
		const { id } = req.query;
		const customer = req.body;
		const editCustomerCase = new EditCustomer(this.repository);

		try {
			const customerEdited = await editCustomerCase.execute(
				Number(id),
				customer
			);

			res.status(200).json({
				data: [customerEdited],
				message: "Cliente editado com sucesso!",
			});
		} catch (err) {
			res.status(500).json({ data: [], message: (err as Error).message });
		}
	};

	findByID = async (
		req: FindByIDRequest,
		res: NextApiResponse<CustomerResponse>
	) => {
		const { id } = req.query;
		const findByIDCustomerCase = new FindByIDCustomer(this.repository);

		try {
			const customer = await findByIDCustomerCase.execute(Number(id));

			res.status(200).json({ data: [customer] });
		} catch (err) {
			res.status(500).json({ data: [], message: (err as Error).message });
		}
	};

	findByEmail = async (
		req: FindByEmailRequest,
		res: NextApiResponse<CustomerResponse>
	) => {
		const { email } = req.body;
		const findByEmailCustomerCase = new FindByEmailCustomer(this.repository);

		try {
			const customer = await findByEmailCustomerCase.execute(email);

			res.status(200).json({ data: [customer] });
		} catch (err) {
			res.status(500).json({ data: [], message: (err as Error).message });
		}
	};
}
