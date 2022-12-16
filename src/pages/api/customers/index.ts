import type { NextApiResponse } from "next";

import { CustomerController } from "@controllers/customer-controller";

import type {
	CreateCustomerRequest,
	FindByEmailRequest,
	CustomerResponse,
} from "@protocols/customer-protocols";

export default async function handler(
	req: FindByEmailRequest & CreateCustomerRequest,
	res: NextApiResponse<CustomerResponse>
) {
	const customerController = new CustomerController();

	if (req.method === "GET") {
		if (req.body.email) return await customerController.findByEmail(req, res);

		return await customerController.loadAll(req, res);
	}

	if (req.method === "POST") return await customerController.create(req, res);

	res.status(405).json({ data: [], message: "Método não suportado" });
}
