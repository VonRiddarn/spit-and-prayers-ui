import "./Divider.scss";

type DividerProps = {
	color?: string;
	orientation?: "horizontal" | "vertical";
	thickness?: string;
	length?: string;
	clearance?: string;
};

const Divider = ({
	color = "red",
	orientation = "horizontal",
	thickness = "1px",
	length = "100%",
	clearance = "1rem",
}: DividerProps) => {
	return (
		<div
			className="Divider"
			style={{
				backgroundColor: color,
				[orientation === "horizontal" ? "height" : "width"]: thickness,
				[orientation === "horizontal" ? "width" : "height"]: length,
				margin: orientation === "horizontal" ? `${clearance} 0` : `0 ${clearance}`,
			}}
		></div>
	);
};

export default Divider;
