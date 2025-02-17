import "./LegendTextArea.scss";

type LegendTextAreaProps = {
	title: string;
	value?: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const LegendTextArea = ({ title, placeholder, value, onChange }: LegendTextAreaProps) => {
	return (
		<fieldset className="LegendTextArea">
			<legend>{title}</legend>
			<textarea placeholder={placeholder} value={value} onChange={onChange} />
		</fieldset>
	);
};

export default LegendTextArea;
