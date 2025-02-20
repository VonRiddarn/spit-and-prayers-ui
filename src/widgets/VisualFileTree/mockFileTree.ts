import { VisualFileType } from "./types";

export const mockFileTree: VisualFileType = {
	name: "homework",
	indentation: 0,
	indentationStops: [],
	subFiles: [
		{
			name: "math",
			indentation: 1,
			indentationStops: [],
			subFiles: [
				{
					name: "algebra",
					indentation: 2,
					indentationStops: [0],
					subFiles: [
						{
							name: "feb-12.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
					],
				},
				{
					name: "quantum-physics",
					indentation: 2,
					indentationStops: [0],
					subFiles: [
						{
							name: "subatomic-relation-calc.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
						{
							name: "wormhole-density-formula.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
						{
							name: "antimatter-cheat-sheet.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
					],
				},
				{
					name: "notes.txt",
					indentation: 2,
					indentationStops: [0],
				},
				{
					name: "brainstorm.txt",
					indentation: 2,
					indentationStops: [0],
				},
			],
		},
		{
			name: "all-test-dates.txt",
			indentation: 1,
			indentationStops: [],
		},
	],
};
