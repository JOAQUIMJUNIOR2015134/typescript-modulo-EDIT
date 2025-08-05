import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a variable using TypeScript 2025 union types that can hold either a string or a number, with type inference";
const solution = "const value: string | number = 'hello';";

const Exercise30: React.FC = () => {
	const value: string | number = "hello";
	return (
		<Exercise title="Exercise 30" description={description} solution={solution}>
			Value: {value} (Type: {typeof value})
		</Exercise>
	);
};

export default Exercise30;
