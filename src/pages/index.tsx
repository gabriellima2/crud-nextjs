import { CustomerForm } from "@components/CustomerForm";

export default function Home() {
	return (
		<main>
			<section>
				<section>
					<h1>Cadastrar novo cliente</h1>

					<CustomerForm />
				</section>
			</section>
		</main>
	);
}
