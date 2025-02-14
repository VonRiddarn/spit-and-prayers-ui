import "./Badge.scss";

type BadgeProps = {
	icon: string;
	amount?: number;
	zeroBehavior?: "show" | "hide" | "no-render";
	title: string | { singular: string; plural: string };
	color?: string;
	height?: string;
};

const Badge = ({
	icon,
	amount,
	zeroBehavior = "hide",
	title,
	color = "#267a269a",
	height = "24px",
}: BadgeProps) => {
	const invalidAmount = !amount || amount === 0;
	if (zeroBehavior === "no-render" && invalidAmount) return;

	return (
		<span
			className="Badge"
			style={{
				backgroundColor: color,
				height,
				borderRadius: height,
				padding: `calc(${height} * 0.3)`,
				fontSize: `calc(${height} * 0.7)`,
			}}
		>
			<span>
				<span className="BadgeIcon">
					{icon}
					{zeroBehavior === "hide" && invalidAmount ? null : <span>{amount || 0}</span>}
				</span>
			</span>
			<span>
				{typeof title === "string"
					? title
					: amount === 1 || amount === -1
					? title.singular
					: title.plural}
			</span>
		</span>
	);
};

export default Badge;
