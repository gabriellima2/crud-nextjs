import * as yup from "yup";

export const customerSchema = yup.object().shape({
	name: yup.string().required("Preencha o campo nome"),
	email: yup
		.string()
		.email("Por favor, digite um email válido")
		.required("Preencha o campo email"),
	zipCode: yup
		.string()
		.matches(
			/^([\d]{2})\.?([\d]{3})-?([\d]{3})/,
			"Por favor, digite um CEP válido"
		)
		.required("Preencha o campo CEP"),
});
