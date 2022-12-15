import type { NextApiResponse } from "next";

import { CustomerController } from "@controllers/customer-controller";

import type {
	CreateCustomerRequest,
	FindByEmailRequest,
} from "@protocols/customer-request-params";

export default async function handler(
	req: FindByEmailRequest & CreateCustomerRequest,
	res: NextApiResponse
) {
	const customerController = new CustomerController();

	if (req.method === "GET") {
		if (req.body.email) return await customerController.findByEmail(req, res);

		return await customerController.loadAll(req, res);
	}

	if (req.method === "POST") return await customerController.create(req, res);

	res.status(405).send("Método não suportado!");
}
