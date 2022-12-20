import type { NextApiRequest } from "next";

export interface CreateCustomerRequest extends NextApiRequest {
	body: string;
}

export interface FindByIDRequest extends NextApiRequest {
	query: {
		id: string;
	};
}

export interface SpecificCustomerRequest extends NextApiRequest {
	query: {
		id: string;
	};
}

export interface EditCustomerRequest extends NextApiRequest {
	body: string;
	query: {
		id: string;
	};
}

export interface FindByEmailRequest extends NextApiRequest {
	body: { email: string };
}
