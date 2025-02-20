export type VisualFileType = {
	name: string;
	indentation: number;
	indentationStops: number[];
	subFiles?: VisualFileType[];
};
