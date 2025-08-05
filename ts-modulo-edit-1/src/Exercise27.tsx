import React from "react";
import Exercise from "./Exercise";

const description =
	"Convert this JavaScript array to TypeScript 2025 with satisfies operator: 'let numbers = [1, 2, 3, 4, 5]'";
const solution = "const numbers = [1, 2, 3, 4, 5] satisfies number[];";

const Exercise27: React.FC = () => {
	const numbers = [1, 2, 3, 4, 5] satisfies number[];
	return (
		<Exercise title="Exercise 27" description={description} solution={solution}>
			Numbers: {numbers.join(", ")}
		</Exercise>
	);
};

export default Exercise27;
