import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a variable using TypeScript 2025 literal types that can only have the values 'red', 'green', or 'blue' with const assertion";
const solution =
	"const color = 'red' as const satisfies 'red' | 'green' | 'blue';";

const Exercise33: React.FC = () => {
	const color = "red" as const satisfies "red" | "green" | "blue";
	return (
		<Exercise title="Exercise 33" description={description} solution={solution}>
			Color: {color}
		</Exercise>
	);
};

export default Exercise33;
