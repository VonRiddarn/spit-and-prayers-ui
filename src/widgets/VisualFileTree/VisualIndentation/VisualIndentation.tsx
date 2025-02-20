import "./VisualIndentation.scss";

interface VisualIndentationProps {
	indentation: number;
	indentationStops: number[];
}

const VisualIndentation = ({ indentation, indentationStops }: VisualIndentationProps) => (
	<span>
		{Array.from({ length: indentation }, (_, i) => (
			<span className="VisualIndentation" key={i}>
				{indentationStops.includes(i)
					? "│\u00A0\u00A0"
					: i === indentation - 1
					? "└──\u00A0"
					: "\u00A0\u00A0"}
			</span>
		))}
	</span>
);

export default VisualIndentation;
