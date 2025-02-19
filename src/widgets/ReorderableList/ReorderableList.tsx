import React from "react";
import "./ReorderableList.scss";
import ReorderableItemInternal from "./ReorderableItemInternal/ReorderableItemInternal";

type ReorderableListProps = {
	items: React.ReactNode[];
};

const ReorderableList = ({ items }: ReorderableListProps) => {
	const [allItems, setAllItems] = React.useState(items);

	return (
		<ul className="ReorderableList">
			{items.map((item, index) => (
				<ReorderableItemInternal key={index} itemsState={{ allItems, setAllItems }}>
					{item}
				</ReorderableItemInternal>
			))}
		</ul>
	);
};

export default ReorderableList;
