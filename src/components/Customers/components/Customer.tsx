import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";

import { useCustomersContext } from "@contexts/CustomerContext";
import { Button } from "./Button";

import type { Customer as ICustomer } from "@domain/customer";

interface CustomerProps extends ICustomer {
	className?: string;
}

export const Customer = ({
	id,
	name,
	email,
	zipCode,
	...props
}: CustomerProps) => {
	const { handleDelete } = useCustomersContext();

	return (
		<tr className={`${props.className} text-xs sm:text-sm md:text-base`}>
			<td>{id}</td>
			<td>{name}</td>
			<td>{email}</td>
			<td>{zipCode}</td>
			<td className="flex gap-2 flex-wrap">
				<Button title="Editar" className="bg-white  border-black/10">
					<FaPencilAlt />
				</Button>

				<Button
					title="Remover"
					onClick={() => handleDelete(id)}
					className="bg-red-500 text-white border-transparent"
				>
					<FaRegTrashAlt />
				</Button>
			</td>
		</tr>
	);
};
