import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a TypeScript 2025 function using arrow function syntax that throws an error and has a return type of 'never'";
const solution =
	"const throwError = (message: string): never => { throw new Error(message); };";

const Exercise39: React.FC = () => {
	const throwError = (message: string): never => {
		throw new Error(message);
	};

	// Note: We won't actually call this function in the component to avoid errors
	return (
		<Exercise title="Exercise 39" description={description} solution={solution}>
			Function created with 'never' return type (not executed to avoid errors)
		</Exercise>
	);
};

export default Exercise39;
