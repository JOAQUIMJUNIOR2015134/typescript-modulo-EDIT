import React from "react";
import Exercise from "./Exercise";

const description =
	"Use TypeScript 2025 type assertion with satisfies operator to tell TypeScript that a variable of type 'any' is actually a string";
const solution =
	"const value: any = 'hello'; const str = value as string satisfies string;";

const Exercise38: React.FC = () => {
	const value: any = "hello";
	const str = value as string satisfies string;
	return (
		<Exercise title="Exercise 38" description={description} solution={solution}>
			Asserted string: {str}
		</Exercise>
	);
};

export default Exercise38;
