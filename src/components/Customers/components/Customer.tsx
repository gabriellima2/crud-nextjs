import type { Customer as ICustomer } from "@domain/customer";

interface CustomerProps extends ICustomer {}

export const Customer = ({ id, name, email, zipCode }: CustomerProps) => {
	return (
		<li>
			<h1>{name}</h1>
		</li>
	);
};
