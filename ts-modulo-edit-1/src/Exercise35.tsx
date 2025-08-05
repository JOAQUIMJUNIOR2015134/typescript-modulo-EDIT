import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a TypeScript 2025 function using arrow function syntax that can accept either a string or an array of strings and returns the length using union types";
const solution =
	"const getLength = (value: string | string[]): number => value.length;";

const Exercise35: React.FC = () => {
	const getLength = (value: string | string[]): number => value.length;

	const stringLength = getLength("hello");
	const arrayLength = getLength(["apple", "banana", "cherry"]);

	return (
		<Exercise title="Exercise 35" description={description} solution={solution}>
			String length: {stringLength}, Array length: {arrayLength}
		</Exercise>
	);
};

export default Exercise35;
