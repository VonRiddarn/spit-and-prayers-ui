import "./ReorderableList.scss";
import ReorderableListItem from "./ReorderableListElement/ReorderableListElement";

type ReorderableListProps = {
	children:
		| React.ReactElement<typeof ReorderableListItem>
		| React.ReactElement<typeof ReorderableListItem>[];
};

const ReorderableList = ({ children }: ReorderableListProps) => <ul>{children}</ul>;

export default ReorderableList;
