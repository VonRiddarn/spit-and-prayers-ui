import { VisualFileType } from "./types";
import "./VisualFileTree.scss";
import VisualFile from "./VisualFilte/VisualFile";

type VisualFileTreeProps = {
	root: VisualFileType;
};

const VisualFileTree = ({ root }: VisualFileTreeProps) => {
	return (
		<div className="VisualFileTree">
			<VisualFile file={root} />
		</div>
	);
};

export default VisualFileTree;
