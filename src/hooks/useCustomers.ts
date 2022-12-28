import useSWR, { Fetcher } from "swr";

import type { OutputCustomerDTO } from "@dtos/customer-dto";

interface UseSWRResponse {
	data: OutputCustomerDTO[] | [];
	message?: string;
}

const fetcher: Fetcher<UseSWRResponse, string> = (params) =>
	fetch(params).then((response) => response.json());

export function useCustomers() {
	const { data: response, ...rest } = useSWR("/api/customers", fetcher, {
		revalidateOnFocus: false,
	});

	return {
		...rest,
		customers: response?.data || [],
	};
}
