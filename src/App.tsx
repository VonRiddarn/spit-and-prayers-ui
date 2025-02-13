import "./App.scss";
import Badge from "./components/ui/Badge/Badge";

function App() {
	return (
		<>
			<h1>💦 Spit and prayers UI 🙏</h1>
			<p>A component library surviving purely on willpower and questionable decisions.</p>

			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<Badge icon="ⓘ" color="blue" title="Informational" />
				<Badge icon="❤" zeroBehavior="show" title="Likes" />
				<Badge icon="✉" color="#123354" zeroBehavior="hide" title="Messages" />
				<Badge icon="⚠" amount={6} title="Warnings" />
				<Badge icon="✖" amount={10} zeroBehavior="no-render" title="Errors" />
				<Badge icon="✔" color="#123354" amount={0} zeroBehavior="no-render" title="Checkmarks" />
			</div>
		</>
	);
}

export default App;
