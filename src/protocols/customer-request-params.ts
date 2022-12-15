import type { NextApiRequest } from "next";
import type { Customer, DBCustomer } from "@domain/customer";

export interface CreateCustomerRequest extends NextApiRequest {
	body: DBCustomer;
}

export interface FindByIDRequest extends NextApiRequest {
	query: {
		id: string;
	};
}

export interface HandleCustomerRequest extends NextApiRequest {
	body: Customer;
	query: {
		id: string;
	};
}

export interface FindByEmailRequest extends NextApiRequest {
	body: { email: string };
}
