import React from "react";
import "./ReorderableList.scss";
import ReorderableItemInternal from "./ReorderableItemInternal/ReorderableItemInternal";

type ReorderableListProps = {
	items: React.ReactNode[];
};

const ReorderableList = ({ items }: ReorderableListProps) => {
	let oldIndex = 0;
	let newIndex = 0;

	const [allItems, setAllItems] = React.useState(items);

	return (
		<ul
			className="ReorderableList"
			onDragStart={(event) => {
				// set old index from currently being dragged element
				const target = event.target as HTMLElement;
				oldIndex = Number(target.closest("li")?.id);
			}}
			onDrag={(event) => {
				// set old index from currently being dragged element
				const target = event.target as HTMLElement;
				oldIndex = Number(target.closest("li")?.id);
			}}
			onDragOver={(event) => {
				// prevent default actions
				event.preventDefault();
			}}
			onDrop={(event) => {
				// get new index to update list
				const target = event.target as HTMLElement;
				newIndex = Number(target.closest("li")?.id);

				// copy the todoItems as they can't be mutated directly
				const allItemsCopy = [...allItems];

				// get the value of the item
				const todoItemText = allItemsCopy[oldIndex];

				// delete the item from its previous index
				allItemsCopy.splice(oldIndex, 1);

				// add the item in the new index
				allItemsCopy.splice(newIndex, 0, todoItemText);

				// update the list and the UI
				setAllItems(allItemsCopy);
			}}
		>
			{allItems.map((item, index) => (
				<ReorderableItemInternal key={index} id={index.toString()}>
					{item}
				</ReorderableItemInternal>
			))}
		</ul>
	);
};

export default ReorderableList;
