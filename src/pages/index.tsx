import type { GetStaticProps, NextPage } from "next";

import { Header } from "@components/Header";
import { Customers } from "@components/Customers";

import type { Customer } from "@domain/customer";
import { customerServices } from "@services/customer-services";

interface HomeProps {
	customers: Customer[] | [];
}

const Home: NextPage<HomeProps> = ({ customers }) => {
	return (
		<div className="p-4 flex flex-col items-center">
			<main className="w-full md:max-w-[1200px] flex flex-col items-center">
				<Header />

				<section>
					<Customers customers={customers} />
				</section>
			</main>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const customers = await customerServices.getCustomers();

	return {
		props: {
			customers,
		},
		revalidate: 20,
	};
};
