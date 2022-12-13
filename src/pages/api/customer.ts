import type { NextApiRequest, NextApiResponse } from "next";
import { CustomerController } from "@controllers/customer-controller";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const customerController = new CustomerController();

	if (req.method === "GET") {
		if (req.body.id >= 0) return await customerController.findByID(req, res);

		if (req.body.email) return await customerController.findByEmail(req, res);

		if (!req.body.email && !req.body.id)
			return await customerController.loadAll(req, res);

		res.status(404).send("Valor não encontrado!");
	}

	if (req.method === "POST") return await customerController.create(req, res);

	if (req.method === "DELETE") return await customerController.delete(req, res);

	if (req.method === "PATCH") return await customerController.edit(req, res);

	res.status(405).send("Método não suportado!");
}
