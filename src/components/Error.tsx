interface ErrorProps {
	message: string;
}

export const Error = ({ message }: ErrorProps) => <p role="alert">{message}</p>;
