import { Header } from "@components/Header";

export default function Home() {
	return (
		<div className="p-4 flex flex-col items-center">
			<main className="w-full md:max-w-[1200px] flex flex-col items-center">
				<Header />
			</main>
		</div>
	);
}
