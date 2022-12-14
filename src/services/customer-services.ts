import { BASE_URL } from "@constants/BASE_URL";
import type { Customer } from "@domain/customer";

class CustomerServices {
	public async getCustomers(): Promise<Customer[] | []> {
		try {
			const response = await fetch(`${BASE_URL}/api/customer`, {
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
}

export const customerServices = new CustomerServices();
