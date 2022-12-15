import type { NextApiRequest } from "next";
import type { Customer } from "@domain/customer";

export interface CreateCustomerApiRequest extends NextApiRequest {
	body: { customer: Omit<Customer, "id"> };
}

export interface CustomerApiRequest extends NextApiRequest {
	body: { customer: Customer };
}

export interface SpecificCustomerApiRequest extends NextApiRequest {
	body: { id: number };
}

export interface CustomerEmailApiRequest extends NextApiRequest {
	body: { email: string };
}
