import type {
	InputCreateCustomerDTO,
	InputEditCustomerDTO,
	OutputCustomerDTO,
} from "@dtos/customer-dto";

export interface ICustomerRepository {
	create: (customer: InputCreateCustomerDTO) => Promise<OutputCustomerDTO>;
	findByID: (id: number) => Promise<OutputCustomerDTO | undefined | null>;
	findByEmail: (email: string) => Promise<OutputCustomerDTO | undefined | null>;
	loadAll: () => Promise<OutputCustomerDTO[] | []>;
	delete: (id: number) => Promise<OutputCustomerDTO>;
	edit: (
		id: number,
		customer: InputEditCustomerDTO
	) => Promise<OutputCustomerDTO>;
}
