import "./VisualIndentation.scss";

interface VisualIndentationProps {
	indent: number;
}

const VisualIndentation = ({ indent }: VisualIndentationProps) => (
	<span>
		{Array.from({ length: indent }, (_, i) => (
			<span className="VisualIndentation" key={i}>
				{i === 0 ? "" : i === indent - 1 ? "|----" : ""}
			</span>
		))}
	</span>
);

export default VisualIndentation;
