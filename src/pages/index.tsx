import { Suspense } from "react";
import type { NextPage } from "next";

import { Customers } from "@components/Customers";
import { Loading } from "@components/Loading";
import { Header } from "@components/Header";

import type { OutputCustomerDTO } from "@dtos/customer-dto";

interface HomeProps {
	customers: OutputCustomerDTO[] | [];
}

const Home: NextPage<HomeProps> = () => {
	return (
		<div className="p-4 flex flex-col items-center">
			<main className="w-full md:max-w-[800px] flex flex-col items-center">
				<Header />

				<section className="w-full mt-12 flex flex-col gap-2 md:gap-4">
					<h2 className="font-medium text-base md:text-lg">
						Detalhes dos Clientes
					</h2>
					<Suspense fallback={<Loading />}>
						<Customers />
					</Suspense>
				</section>
			</main>
		</div>
	);
};

export default Home;
