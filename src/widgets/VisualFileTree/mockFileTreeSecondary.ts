import { VisualFileType } from "./types";

export const mockFileTreeSecondary: VisualFileType = {
	name: "projects",
	indentation: 0,
	indentationStops: [],
	subFiles: [
		{
			name: "science",
			indentation: 1,
			indentationStops: [],
			subFiles: [
				{
					name: "physics",
					indentation: 2,
					indentationStops: [0],
					subFiles: [
						{
							name: "gravity-research.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
						{
							name: "quantum-theory.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
					],
				},
				{
					name: "chemistry",
					indentation: 2,
					indentationStops: [0],
					subFiles: [
						{
							name: "organic-compounds.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
						{
							name: "reaction-mechanisms.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
					],
				},
				{
					name: "biology",
					indentation: 2,
					indentationStops: [0],
					subFiles: [
						{
							name: "cell-structure.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
						{
							name: "genetics-overview.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
					],
				},
			],
		},
		{
			name: "literature",
			indentation: 1,
			indentationStops: [],
			subFiles: [
				{
					name: "poetry",
					indentation: 2,
					indentationStops: [0],
					subFiles: [
						{
							name: "sonnets.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
						{
							name: "haikus.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
					],
				},
				{
					name: "novels",
					indentation: 2,
					indentationStops: [0],
					subFiles: [
						{
							name: "mystery-novel.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
						{
							name: "sci-fi-novel.txt",
							indentation: 3,
							indentationStops: [0, 1],
						},
					],
				},
			],
		},
		{
			name: "project-deadlines.txt",
			indentation: 1,
			indentationStops: [],
		},
	],
};
