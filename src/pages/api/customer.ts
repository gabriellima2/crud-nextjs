import type { NextApiRequest, NextApiResponse } from "next";
import { CustomerController } from "@controllers/customer-controller";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const customerController = new CustomerController();

	if (req.method === "GET") {
		if (req.body.id >= 0) return customerController.findByID(req, res);

		if (req.body.email) return customerController.findByEmail(req, res);

		return customerController.loadAll(req, res);
	}

	if (req.method === "POST") return await customerController.create(req, res);

	if (req.method === "DELETE") return customerController.delete(req, res);

	if (req.method === "PATCH") return customerController.edit(req, res);

	res.status(405).send("Método não suportado!");
}
