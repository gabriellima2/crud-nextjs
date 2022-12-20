import { BASE_URL } from "@constants/BASE_URL";
import type { InputCreateCustomerDTO } from "@dtos/customer-dto";

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
}

export const customerServices = new CustomerServices();
