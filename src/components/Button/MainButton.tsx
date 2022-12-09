import { ButtonHTMLAttributes } from "react";

export interface MainButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const MainButton = (props: MainButtonProps) => <button {...props} />;
