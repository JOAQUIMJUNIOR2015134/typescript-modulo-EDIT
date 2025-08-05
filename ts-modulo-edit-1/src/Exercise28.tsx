import React from "react";
import Exercise from "./Exercise";

const description =
	"Convert this JavaScript function to TypeScript 2025 with arrow function and explicit return type: 'function add(a, b) { return a + b; }'";
const solution = "const add = (a: number, b: number): number => a + b;";

const Exercise28: React.FC = () => {
	const add = (a: number, b: number): number => a + b;
	return (
		<Exercise title="Exercise 28" description={description} solution={solution}>
			Add function result: {add(5, 3)}
		</Exercise>
	);
};

export default Exercise28;
