import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";
import Exercise6 from "./Exercise6";
import Exercise7 from "./Exercise7";
import Exercise8 from "./Exercise8";
import Exercise9 from "./Exercise9";
import Exercise10 from "./Exercise10";
import Exercise11 from "./Exercise11";
import Exercise12 from "./Exercise12";
import Exercise13 from "./Exercise13";
import Exercise14 from "./Exercise14";
import Exercise15 from "./Exercise15";
import Exercise16 from "./Exercise16";
import Exercise17 from "./Exercise17";
import Exercise18 from "./Exercise18";
import Exercise19 from "./Exercise19";
import Exercise20 from "./Exercise20";
import Exercise21 from "./Exercise21";
import Exercise22 from "./Exercise22";
import Exercise23 from "./Exercise23";
import Exercise24 from "./Exercise24";
import Exercise25 from "./Exercise25";
import Exercise26 from "./Exercise26";
import Exercise27 from "./Exercise27";
import Exercise28 from "./Exercise28";
import Exercise29 from "./Exercise29";
import Exercise30 from "./Exercise30";
import Exercise31 from "./Exercise31";
import Exercise32 from "./Exercise32";
import Exercise33 from "./Exercise33";
import Exercise34 from "./Exercise34";
import Exercise35 from "./Exercise35";
import Exercise36 from "./Exercise36";
import Exercise37 from "./Exercise37";
import Exercise38 from "./Exercise38";
import Exercise39 from "./Exercise39";
import Exercise40 from "./Exercise40";
import "./App.css";

function App() {
	const [selectedDay, setSelectedDay] = useState(1);

	const renderExercises = () => {
		switch (selectedDay) {
			case 1:
				return (
					<>
						<Exercise1 />
						<Exercise2 />
						<Exercise3 />
						<Exercise4 />
						<Exercise5 />
						<Exercise26 />
						<Exercise27 />
						<Exercise28 />
						<Exercise29 />
						<Exercise30 />
						<Exercise31 />
						<Exercise32 />
						<Exercise33 />
						<Exercise34 />
						<Exercise35 />
						<Exercise36 />
						<Exercise37 />
						<Exercise38 />
						<Exercise39 />
						<Exercise40 />
					</>
				);
			case 2:
				return (
					<>
						<Exercise6 />
						<Exercise7 />
						<Exercise8 />
						<Exercise9 />
						<Exercise10 />
					</>
				);
			case 3:
				return (
					<>
						<Exercise11 />
						<Exercise12 />
						<Exercise13 />
						<Exercise14 />
						<Exercise15 />
					</>
				);
			case 4:
				return (
					<>
						<Exercise16 />
						<Exercise17 />
						<Exercise18 />
						<Exercise19 />
						<Exercise20 />
					</>
				);
			case 5:
				return (
					<>
						<Exercise21 />
						<Exercise22 />
						<Exercise23 />
						<Exercise24 />
						<Exercise25 />
					</>
				);
			case 6:
				return (
					<>
						<h2>Reinforcement Exercises</h2>
						<ol style={{ textAlign: "left", maxWidth: 700, margin: "0 auto" }}>
							<li>
								Rewrite one of the previous exercises using a different type
								(for example, change number to string).
							</li>
							<li>
								Create a function that receives an array of strings and returns
								the length of the largest element.
							</li>
							<li>
								Create an object with optional properties and access them
								safely.
							</li>
							<li>
								Write a function that receives a parameter of a union type
								(string | number) and returns a formatted string.
							</li>
							<li>
								Create an interface for a product and add a method to calculate
								the discounted price.
							</li>
							<li>
								Use an enum to represent different order statuses (e.g.,
								Pending, Paid, Shipped).
							</li>
							<li>
								Create an array of typed objects and filter the elements based
								on a property.
							</li>
							<li>
								Write a generic function that receives two arguments and returns
								an array with both.
							</li>
							<li>
								Create a React component that receives a list of users and
								renders their names.
							</li>
							<li>
								Use Partial to create a configuration object where all
								properties are optional.
							</li>
							<li>
								Write a function that receives an object and a key (keyof) and
								returns the corresponding value.
							</li>
							<li>
								Create a type that combines two interfaces using intersection
								(&) and use it in a function.
							</li>
							<li>
								Implement a custom React hook that returns a boolean value and a
								function to toggle it.
							</li>
							<li>
								Create a React component that uses an enum to render different
								messages depending on the state.
							</li>
							<li>
								(Optional) Choose a previous exercise and explain each line of
								code to the class.
							</li>
						</ol>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<Container maxWidth="md">
			<Typography variant="h3" align="center" gutterBottom sx={{ mt: 4 }}>
				TypeScript Exercises
			</Typography>
			<Typography
				variant="body1"
				align="center"
				sx={{ mb: 3, maxWidth: 600, mx: "auto" }}>
				Welcome! Use the navigation below to select a day. Each day contains 5
				exercises covering different TypeScript topics. Read the comment above
				each exercise for the task and its solution. Try to solve the exercise
				yourself before looking at the solution!
			</Typography>
			<Box display="flex" justifyContent="center" mb={3}>
				{[1, 2, 3, 4, 5, 6].map((day) => (
					<button
						key={day}
						onClick={() => setSelectedDay(day)}
						style={{
							marginRight: 8,
							padding: "8px 16px",
							background: selectedDay === day ? "#1976d2" : "#eee",
							color: selectedDay === day ? "#fff" : "#222",
							border: "none",
							borderRadius: 4,
							cursor: "pointer",
							fontWeight: selectedDay === day ? "bold" : "normal",
						}}>
						{day <= 5 ? `Day ${day}` : "Reinforcement"}
					</button>
				))}
			</Box>
			<Typography variant="h5" align="center" gutterBottom>
				Day {selectedDay}
			</Typography>
			{renderExercises()}
		</Container>
	);
}

export default App;
