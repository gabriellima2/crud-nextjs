import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";

import type { Customer } from "@domain/customer";
import { Button } from "./Button";

interface CellProps extends Customer {
	className?: string;
}

export const Cell = ({ id, name, email, zipCode, ...props }: CellProps) => {
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
					className="bg-red-500 text-white border-transparent"
				>
					<FaRegTrashAlt />
				</Button>
			</td>
		</tr>
	);
};
