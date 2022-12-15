export interface Customer {
	id: number;
	name: string;
	email: string;
	zipCode: string;
}

export interface DBCustomer extends Omit<Customer, "id"> {}
