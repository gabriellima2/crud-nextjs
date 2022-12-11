import { CustomerForm } from "@components/CustomerForm";

export default function Home() {
	return (
		<div className="p-4 flex flex-col items-center">
			<main className="w-full md:max-w-[1200px] flex flex-col items-center">
				<section className="w-full flex flex-col items-center bg-white rounded-b-md">
					<header className="w-full self-start bg-accent py-1 px-3 rounded-t-md">
						<h1 className="text-base md:text-lg font-medium capitalize text-white">
							Cadastrar novo cliente
						</h1>
					</header>

					<div className="w-full md:w-auto p-4 sm:p-5">
						<CustomerForm />
					</div>
				</section>
			</main>
		</div>
	);
}
