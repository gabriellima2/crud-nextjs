interface ErrorProps {
	message: string;
}

export const Error = ({ message }: ErrorProps) => (
	<p role="alert" className="text-red-500 font-medium text-xs md:text-sm">
		{message}
	</p>
);
