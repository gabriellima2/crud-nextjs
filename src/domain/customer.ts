export interface Customer {
	id: number;
	name: string;
	email?: string | undefined;
	zipCode: string;
	address: string;
}
