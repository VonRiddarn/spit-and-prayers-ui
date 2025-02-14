import "./Accordion.scss";
import React from "react";

type AccordionProps = {
	title: string;
	interaction: "hover" | "click"; // TODO: Add  | "button";
	animDur?: `${number}${"s" | "ms"}`;
	color?: string;
	backgroundColor?: string;
	children?: React.ReactNode;
};

// TODO: Add selector element
// If the element is the closing element of the Accordion, set the AccordionInteraction class
// This makes us able to style the title or the entire accordion section when we want to do cool stuff.

const Accordion = ({
	title,
	interaction,
	animDur = "0.42s",
	children,
	color = "",
	backgroundColor = "",
}: AccordionProps) => {
	const [expanded, setExpanded] = React.useState(false);

	return (
		<section
			className="Accordion"
			onMouseEnter={interaction === "hover" ? () => setExpanded(true) : undefined}
			onMouseLeave={interaction === "hover" ? () => setExpanded(false) : undefined}
		>
			<h2
				className="AccordionTitle"
				onClick={interaction === "click" ? () => setExpanded(!expanded) : undefined}
				style={{ cursor: interaction === "click" ? "pointer" : "default" }}
			>
				{title}
			</h2>
			{children && (
				<div
					className="AccordionGrid"
					style={{
						gridTemplateRows: expanded ? "1fr" : "0fr",
						transition: `grid-template-rows ${animDur}`,
					}}
				>
					<div
						style={{
							color,
							backgroundColor,
						}}
					>
						{children}
					</div>
				</div>
			)}
		</section>
	);
};

export default Accordion;
