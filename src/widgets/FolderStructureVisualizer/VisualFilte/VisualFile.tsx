import VisualIndentation from "../VisualIndentation/VisualIndentation";
import "./VisualFile.scss";

interface VisualFileProps {
	indent: number;
	name: string;
}

const VisualFile = ({ indent, name }: VisualFileProps) => (
	<div>
		<VisualIndentation indent={indent} />
		{name}
	</div>
);

export default VisualFile;
