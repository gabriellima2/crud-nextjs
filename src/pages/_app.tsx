import type { AppProps } from "next/app";

import { CustomerContextProvider } from "@contexts/CustomerContext";
import "@styles/globals.css";
import { ToastContextProvider } from "@contexts/ToastContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ToastContextProvider>
			<CustomerContextProvider>
				<Component {...pageProps} />
			</CustomerContextProvider>
		</ToastContextProvider>
	);
}
