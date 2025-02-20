import React from "react";

type ReorderableItemInternalProps = {
	id: string;
	children: React.ReactNode;
};

// TODO: F this noise. Whatever. Fix this shit some other day.

const ReorderableItemInternal = ({ children, id }: ReorderableItemInternalProps) => {
	const [isDragging, setIsDragging] = React.useState(false);

	return (
		<li
			id={id}
			className={`ReorderableItem${isDragging ? " Dragging" : ""}`}
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

export default ReorderableItemInternal;
