import React from "react";

type ReorderableItemInternalProps = {
	id: number;
	children: React.ReactNode;
	handleDragStart: (index: number) => void;
	handleDragOver: (event: React.DragEvent<HTMLLIElement>, index: number) => void;
	handleDrop: () => void;
};

const ReorderableItemInternal = ({
	children,
	id,
	handleDragStart,
	handleDragOver,
	handleDrop,
}: ReorderableItemInternalProps) => {
	const [isDragging, setIsDragging] = React.useState(false);

	return (
		<li
			id={id.toString()}
			className={`ReorderableItem${isDragging ? " Dragging" : ""}`}
			draggable={true}
			onDragStart={() => {
				setTimeout(() => {
					setIsDragging(true);
					handleDragStart(id);
				}, 0);
			}}
			onDragOver={(event) => handleDragOver(event, id)}
			onDrop={handleDrop}
			onDragEnd={() => {
				setIsDragging(false);
			}}
		>
			{children}
		</li>
	);
};

export default ReorderableItemInternal;
