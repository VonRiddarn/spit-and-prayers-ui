import React from "react";
import "./ReorderableList.scss";
import ReorderableItemInternal from "./ReorderableItemInternal/ReorderableItemInternal";

type ReorderableListProps = {
	items: React.ReactNode[];
};

/* 

TODO: fix list update

List of pain and suffering (errors):
* If the itemarray is updated outside of the component the page requires a reload to initialize the new array
* Items will update the target in real time, but not the origin
* The target will update with a clean (non .Dragging) version of the item

*/

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
