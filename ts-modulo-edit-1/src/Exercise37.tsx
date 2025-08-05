import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a TypeScript 2025 generic function called 'firstElement' using arrow function syntax and satisfies operator for type safety";
const solution =
	"const firstElement = <T,>(arr: T[]): T | undefined => arr[0];";

const Exercise37: React.FC = () => {
	const firstElement = <T,>(arr: T[]): T | undefined => arr[0];

	const numbers = [1, 2, 3, 4, 5] satisfies number[];
	const strings = ["apple", "banana", "cherry"] satisfies string[];
	const firstNumber = firstElement(numbers);
	const firstString = firstElement(strings);

	return (
		<Exercise title="Exercise 37" description={description} solution={solution}>
			First number: {firstNumber}, First string: {firstString}
		</Exercise>
	);
};

export default Exercise37;
