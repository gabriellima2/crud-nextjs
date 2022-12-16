import { BASE_URL } from "@constants/BASE_URL";

class CustomerServices {
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
