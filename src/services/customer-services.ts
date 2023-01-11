import { BASE_URL } from "@constants/BASE_URL";
import type {
	InputCreateCustomerDTO,
	InputEditCustomerDTO,
} from "@dtos/customer-dto";
import type { CustomerResponse } from "@protocols/customer-protocols";

class CustomerServices {
	public async delete(id: number): Promise<string> {
		const defaultErrorMessage = "Erro, não foi possível deletar o cliente!";
		try {
			const response = await fetch(`${BASE_URL}/api/customers/${id}`, {
				method: "DELETE",
			});
			const data: CustomerResponse = await response.json();

			if (data.message && !response.ok) throw new Error(data.message);
			if (!response.ok) throw new Error(defaultErrorMessage);

			return data.message || "Cliente deletado com sucesso!";
		} catch (err) {
			const errorMessage = (err as Error).message || defaultErrorMessage;
			console.error(errorMessage);
			return errorMessage;
		}
	}

	public async create(customer: InputCreateCustomerDTO): Promise<string> {
		const defaultErrorMessage = "Erro, não foi possível criar o cliente!";
		try {
			const response = await fetch(`${BASE_URL}/api/customers`, {
				method: "POST",
				body: JSON.stringify(customer),
			});
			const data: CustomerResponse = await response.json();

			if (data.message && !response.ok) throw new Error(data.message);
			if (!response.ok) throw new Error(defaultErrorMessage);

			return data.message || "Cliente criado com sucesso!";
		} catch (err) {
			const errorMessage = (err as Error).message || defaultErrorMessage;
			console.error(errorMessage);
			return errorMessage;
		}
	}

	public async edit(customer: InputEditCustomerDTO): Promise<string> {
		const defaultErrorMessage = "Erro, não foi possível editar o cliente!";
		try {
			const response = await fetch(`${BASE_URL}/api/customers/${customer.id}`, {
				method: "PATCH",
				body: JSON.stringify(customer),
			});
			const data: CustomerResponse = await response.json();

			if (data.message && !response.ok) throw new Error(data.message);
			if (!response.ok) throw new Error(defaultErrorMessage);

			return data.message || "Cliente editado com sucesso!";
		} catch (err) {
			const errorMessage = (err as Error).message || defaultErrorMessage;
			console.error(errorMessage);
			return errorMessage;
		}
	}
}

export const customerServices = new CustomerServices();
