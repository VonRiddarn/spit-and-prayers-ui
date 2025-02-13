import "./Badge.scss";

type BadgeProps = {
	icon: string;
	amount?: number;
	zeroBehavior?: "show" | "hide" | "no-render";
	title: string;
	color?: string;
	height?: string;
	paddingMp?: number;
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
		<div
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
			<span>{title}</span>
		</div>
	);
};

export default Badge;
