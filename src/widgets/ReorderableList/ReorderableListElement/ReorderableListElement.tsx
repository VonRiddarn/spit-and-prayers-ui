import "./ReorderableListElement.scss";

type ReorderableListItemProp = {
	children: React.ReactElement;
};

const ReorderableListItem = ({ children }: ReorderableListItemProp) => <li>{children}</li>;

export default ReorderableListItem;
