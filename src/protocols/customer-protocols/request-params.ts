import type { NextApiRequest } from "next";
import {
	InputCreateCustomerDTO,
	InputEditCustomerDTO,
} from "@dtos/customer-dto";

export interface CreateCustomerRequest extends NextApiRequest {
	body: InputCreateCustomerDTO;
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
	body: InputEditCustomerDTO;
	query: {
		id: string;
	};
}

export interface FindByEmailRequest extends NextApiRequest {
	body: { email: string };
}
