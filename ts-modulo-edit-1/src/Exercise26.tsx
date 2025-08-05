import React from "react";
import Exercise from "./Exercise";

const description =
	"Convert this JavaScript variable declaration to TypeScript 2025 with explicit typing and const assertion: 'let name = \"John\"'";
const solution = 'const name: string = "John" as const;';

const Exercise26: React.FC = () => {
	const name: string = "John" as const;
	return (
		<Exercise title="Exercise 26" description={description} solution={solution}>
			Name is: {name}
		</Exercise>
	);
};

export default Exercise26;
