import { Customer } from "@domain/customer";

export interface CustomerResponse {
	data: Customer[] | [];
	message?: string | null;
}
