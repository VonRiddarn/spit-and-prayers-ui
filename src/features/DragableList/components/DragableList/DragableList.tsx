import "./DragableList.scss";

type DragableListProps = {
	children: React.ReactNode;
};

const DragableList = ({ children }: DragableListProps) => <ul className="DragableList">{children}</ul>;

export default DragableList;
