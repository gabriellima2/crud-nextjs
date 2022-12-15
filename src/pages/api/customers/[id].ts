import type { NextApiResponse } from "next";

import { CustomerController } from "@controllers/customer-controller";
import type { FindByIDRequest } from "@protocols/customer-request-params";

export default async function handler(
	req: FindByIDRequest,
	res: NextApiResponse
) {
	const customerController = new CustomerController();
	const { query } = req;

	if (Array.isArray(query.id) || isNaN(Number(query.id)))
		return res.status(404).send("Parâmetro inválido!");

	if (req.method === "GET") return await customerController.findByID(req, res);

	if (req.method === "DELETE") return await customerController.delete(req, res);

	if (req.method === "PATCH") return await customerController.edit(req, res);

	res.status(405).send("Método não suportado!");
}
