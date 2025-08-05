import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a TypeScript 2025 function using arrow function syntax that accepts an 'unknown' type and safely checks if it's a string before using it";
const solution =
	"const processValue = (value: unknown): string => { if (typeof value === 'string') { return value; } return 'not a string'; };";

const Exercise40: React.FC = () => {
	const processValue = (value: unknown): string => {
		if (typeof value === "string") {
			return value;
		}
		return "not a string";
	};

	const result1 = processValue("hello");
	const result2 = processValue(123);

	return (
		<Exercise title="Exercise 40" description={description} solution={solution}>
			Processed 'hello': {result1}, Processed 123: {result2}
		</Exercise>
	);
};

export default Exercise40;
