import "./DragableListElement.scss";

type DragableListElementProps = {
	children: React.ReactNode;
};

const DragableListElement = ({ children }: DragableListElementProps) => (
	<li className="DragableListElement" draggable={true}>
		{children}
	</li>
);

export default DragableListElement;
