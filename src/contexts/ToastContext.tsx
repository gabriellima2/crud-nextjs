import { createContext, ReactNode, useContext } from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastContextProperties {
	showToast: (message: string, options?: ToastOptions) => void;
}

const ToastContext = createContext({} as ToastContextProperties);

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
	const showToast = (message: string, options?: ToastOptions) => {
		toast(message, options);
	};

	return (
		<ToastContext.Provider value={{ showToast }}>
			<ToastContainer
				position="bottom-right"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			{children}
		</ToastContext.Provider>
	);
};

export const useToastContext = () => useContext(ToastContext);
