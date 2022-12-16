import type { AppProps } from "next/app";

import { CustomerContextProvider } from "@contexts/CustomerContext";
import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CustomerContextProvider>
			<Component {...pageProps} />
		</CustomerContextProvider>
	);
}
