import { BASE_URL } from "@constants/BASE_URL";
import type {
	InputCreateCustomerDTO,
	InputEditCustomerDTO,
} from "@dtos/customer-dto";

class CustomerServices {
	public async delete(id: number): Promise<void> {
		try {
			const response = await fetch(`${BASE_URL}/api/customers/${id}`, {
				method: "DELETE",
			});

			if (!response.ok)
				throw new Error("Erro, não foi possível deletar os dados!");
		} catch (err) {
			console.error(
				(err as Error).message || "Ocorreu um erro ao tentar deletar o cliente"
			);
		}
	}

	public async create(customer: InputCreateCustomerDTO) {
		try {
			const response = await fetch(`${BASE_URL}/api/customers`, {
				method: "POST",
				body: JSON.stringify(customer),
			});

			if (!response.ok)
				throw new Error("Erro, não foi possível criar o cliente!");
		} catch (err) {
			console.error(
				(err as Error).message || "Ocorreu um erro ao criar o cliente"
			);
		}
	}

	public async edit(customer: InputEditCustomerDTO) {
		try {
			const response = await fetch(`${BASE_URL}/api/customers/${customer.id}`, {
				method: "PATCH",
				body: JSON.stringify(customer),
			});

			if (!response.ok)
				throw new Error("Erro, não foi possível editar o cliente!");
		} catch (err) {
			console.error(
				(err as Error).message || "Ocorreu um erro ao editar o cliente"
			);
		}
	}
}

export const customerServices = new CustomerServices();
