import React from "react";
import "./ReorderableListItem.scss";

type ReorderableListItemProp = {
	children: React.ReactNode;
};

const ReorderableListItem = ({ children }: ReorderableListItemProp) => {
	const [isDragging, setIsDragging] = React.useState(false);

	return (
		<li
			className={`ReorderableListItem${isDragging ? " Dragging" : ""}`}
			draggable={true}
			onDragStart={() => {
				setTimeout(() => {
					setIsDragging(true);
				}, 0);
			}}
			onDragEnd={() => {
				setIsDragging(false);
			}}
		>
			{children}
		</li>
	);
};

export default ReorderableListItem;
