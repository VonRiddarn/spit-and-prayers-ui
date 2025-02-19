import React from "react";

type ReorderableItemInternalProps = {
	children: React.ReactNode;
	itemsState: {
		allItems: React.ReactNode[];
		setAllItems: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
	};
};

// TODO: F this noise. Whatever. Fix this shit some other day.

const ReorderableItemInternal = ({ children, itemsState }: ReorderableItemInternalProps) => {
	const [isDragging, setIsDragging] = React.useState(false);

	return (
		<li
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
