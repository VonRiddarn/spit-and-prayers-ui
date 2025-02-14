import "./App.scss";
import Accordion from "./components/ui/Accordion/Accordion";
import LegendInputField from "./components/ui/LegendInputField/LegendInputField";

function App() {
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					border: "2px dotted white",
					padding: "1rem",
				}}
			>
				<h2 style={{ borderBottom: "1px solid gray", width: "fit-content" }}>Accordions</h2>
				<Accordion title="House Pets (Hover)" interaction="hover" indicator={false}>
					<Accordion title="Cats (Click)" interaction="click">
						<h3>All About Cats</h3>
						<p>
							Cats are independent and curious animals, known for their agility and playful
							nature. They have been domesticated for thousands of years and are one of the most
							popular pets worldwide. Cats communicate through a variety of vocalizations, body
							language, and even facial expressions.
						</p>
					</Accordion>
					<Accordion title="Dogs (Click)" interaction="click">
						<h3>All About Dogs</h3>
						<p>
							Dogs are known for their loyalty and companionship. They come in various breeds,
							each with unique characteristics and traits. From the small and energetic
							Chihuahua to the large and gentle Great Dane, there is a dog for every type of
							person. Dogs have been domesticated for thousands of years and have served humans
							in many roles, including as working animals, therapy animals, and beloved pets.
							They are known for their keen senses, particularly their sense of smell, which
							makes them excellent at tasks such as search and rescue, detection, and hunting.
							Owning a dog can bring immense joy and requires a commitment to their care and
							well-being.
						</p>
					</Accordion>
				</Accordion>
				<Accordion title="Birds (Hover)" interaction="hover">
					<h3>All About Birds</h3>
					<p>
						Birds are fascinating creatures with the ability to fly, thanks to their lightweight
						bones and strong muscles. They come in a wide range of species, each with unique
						colors, songs, and behaviors. Birds play a crucial role in ecosystems by pollinating
						plants, dispersing seeds, and controlling insect populations.
					</p>
				</Accordion>
				<Accordion title="Fish (Click)" interaction="click">
					<h3>All About Fish</h3>
					<p>
						Fish are aquatic animals that come in a vast array of shapes, sizes, and colors. They
						can be found in nearly every body of water, from the deepest oceans to the smallest
						ponds. Fish are an important part of the food chain and have been a source of food for
						humans for centuries. Some fish, like the clownfish, have symbiotic relationships with
						other marine creatures.
					</p>
					<Accordion title="Species of Fish (Hover)" interaction="hover" indicator={false}>
						<h3>Popular Fish Species</h3>
						<ul>
							<li>Clownfish</li>
							<li>Goldfish</li>
							<li>Salmon</li>
							<li>Betta</li>
							<li>Guppy</li>
							<li>Angelfish</li>
							<li>Tetra</li>
						</ul>
						<p>
							There are thousands of species of fish, each adapted to their unique environments.
							Some popular species include the colorful and vibrant tropical fish, the hardy and
							adaptable goldfish, and the majestic and powerful salmon. Each species has its own
							unique characteristics, behaviors, and habitats, making the study of fish a
							fascinating field.
						</p>
					</Accordion>
				</Accordion>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					border: "2px dotted white",
					padding: "1rem",
				}}
			>
				<LegendInputField title="Test" type="text" />
			</div>
		</>
	);
}

export default App;
