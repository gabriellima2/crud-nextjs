import { CustomerForm } from "./components";

export const Header = () => {
	return (
		<header className="w-full flex flex-col gap-4">
			<h1 className="font-medium text-xl">Gerenciar Clientes</h1>
			<section>
				<CustomerForm />
			</section>
		</header>
	);
};
