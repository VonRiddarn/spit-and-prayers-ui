import "./ReorderableList.scss";
import ReorderableListItem from "./ReorderableListElement/ReorderableListItem";

type ReorderableListProps = {
	children:
		| React.ReactElement<typeof ReorderableListItem>
		| React.ReactElement<typeof ReorderableListItem>[];
};

const ReorderableList = ({ children }: ReorderableListProps) => {
	return <ul className="ReorderableList">{children}</ul>;
};

export default ReorderableList;
