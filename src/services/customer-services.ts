import { BASE_URL } from "@constants/BASE_URL";
import type { Customer } from "@domain/customer";

class CustomerServices {
	public async load(): Promise<Customer[] | []> {
		try {
			const response = await fetch(`${BASE_URL}/api/customers`, {
				method: "GET",
			});

			if (!response.ok)
				throw new Error("Erro, não foi possível pegar os dados!");

			return response.json();
		} catch (err) {
			console.error(err || "Ocorreu um erro no servidor!");
			return [];
		}
	}

	public async delete(id: number): Promise<void> {
		try {
			const response = await fetch(`${BASE_URL}/api/customers/${id}`, {
				method: "DELETE",
			});

			if (!response.ok)
				throw new Error("Erro, não foi possível pegar os dados!");
		} catch (err) {
			console.error(err || "Ocorreu um erro ao tentar deletar o cliente");
		}
	}
}

export const customerServices = new CustomerServices();
