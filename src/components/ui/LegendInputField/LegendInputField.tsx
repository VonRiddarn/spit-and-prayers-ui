import "./LegendInputField.scss";

type LegendInputFieldProps = {
	title: string;
	type: "email" | "text" | "password";
};

const LegendInputField = ({ title, type }: LegendInputFieldProps) => {
	return (
		<fieldset className="LegendInputField">
			<legend>{title}</legend>
			<input type={type} />
		</fieldset>
	);
};

export default LegendInputField;
