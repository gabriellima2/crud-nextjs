// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CustomerController } from "src/controllers/customer-controller";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const customerController = new CustomerController();

	if (req.method === "GET") {
		if (req.body.id >= 0) return customerController.findByID(req, res);

		if (req.body.email) return customerController.findByEmail(req, res);

		return customerController.loadAll(req, res);
	}

	if (req.method === "POST") return customerController.create(req, res);

	if (req.method === "DELETE") return customerController.delete(req, res);

	if (req.method === "PATCH") return customerController.edit(req, res);

	res.status(405);
}
