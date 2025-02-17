import "./LegendInputField.scss";

type LegendInputFieldProps = {
	title: string;
	type: "email" | "text" | "password";
	value?: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LegendInputField = ({ title, type, placeholder, value, onChange }: LegendInputFieldProps) => {
	return (
		<fieldset className="LegendInputField">
			<legend>{title}</legend>
			<input type={type} placeholder={placeholder} value={value} onChange={onChange} />
		</fieldset>
	);
};

export default LegendInputField;
