import type { OutputCustomerDTO } from "@dtos/customer-dto";

export interface CustomerResponse {
	data: OutputCustomerDTO[] | [];
	message?: string | null;
}
