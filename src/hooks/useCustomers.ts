import useSWR, { Fetcher } from "swr";

import type { Customer } from "@domain/customer";

interface UseSWRResponse {
	data: Customer[] | [];
	message?: string;
}

const fetcher: Fetcher<UseSWRResponse, string> = (params) =>
	fetch(params).then((response) => response.json());

export function useCustomers() {
	const { data: response, ...rest } = useSWR("/api/customers", fetcher);

	return {
		...rest,
		customers: response?.data || [],
	};
}
