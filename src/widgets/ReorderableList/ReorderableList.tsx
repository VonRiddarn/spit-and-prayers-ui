import React from "react";
import "./ReorderableList.scss";
import ReorderableItemInternal from "./ReorderableItemInternal/ReorderableItemInternal";

type ReorderableListProps = {
	items: React.ReactNode[];
};

const ReorderableList = ({ items }: ReorderableListProps) => {
	const [allItems, setAllItems] = React.useState(items);
	const [draggedIndex, setDraggedIndex] = React.useState<number | null>(null);

	const handleDragStart = (index: number) => {
		setDraggedIndex(index);
	};

	const handleDragOver = (event: React.DragEvent<HTMLLIElement>, index: number) => {
		event.preventDefault();
		if (draggedIndex === null || draggedIndex === index) return;

		const updatedItems = [...allItems];
		const [draggedItem] = updatedItems.splice(draggedIndex, 1);
		updatedItems.splice(index, 0, draggedItem);

		setDraggedIndex(index);
		setAllItems(updatedItems);
	};

	const handleDrop = () => {
		setDraggedIndex(null);
	};

	return (
		<ul className="ReorderableList">
			{allItems.map((item, index) => (
				<ReorderableItemInternal
					key={index}
					id={index}
					handleDragStart={() => handleDragStart(index)}
					handleDragOver={(event) => handleDragOver(event, index)}
					handleDrop={handleDrop}
				>
					{item}
				</ReorderableItemInternal>
			))}
		</ul>
	);
};

export default ReorderableList;
