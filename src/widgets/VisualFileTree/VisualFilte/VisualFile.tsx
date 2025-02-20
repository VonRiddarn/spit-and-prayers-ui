import { VisualFileType } from "../types";
import VisualIndentation from "../VisualIndentation/VisualIndentation";
import "./VisualFile.scss";

type VisualFileProps = {
	file: VisualFileType;
};

const VisualFile = ({ file }: VisualFileProps) => (
	<div className="VisualFile">
		<VisualIndentation indentation={file.indentation} indentationStops={file.indentationStops} />
		{file.subFiles !== undefined && file.subFiles.length > 0 ? "📁" : "📝"}
		{file.name}
		{file.subFiles?.map((subFile) => (
			<VisualFile key={subFile.name} file={subFile} />
		))}
	</div>
);

export default VisualFile;
