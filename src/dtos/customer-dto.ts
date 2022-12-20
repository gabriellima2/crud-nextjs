export interface InputCreateCustomerDTO {
	name: string;
	email: string;
	zipCode: string;
}

export interface InputEditCustomerDTO {
	id: number;
	name: string;
	email: string;
	zipCode: string;
}

export interface OutputCustomerDTO {
	id: number;
	name: string;
	email: string;
	zipCode: string;
}
