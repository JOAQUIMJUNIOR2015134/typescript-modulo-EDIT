import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a TypeScript 2025 type alias called 'UserId' for number and use it with const assertion";
const solution =
	"type UserId = number; const userId = 123 as const satisfies UserId;";

const Exercise32: React.FC = () => {
	type UserId = number;
	const userId = 123 as const satisfies UserId;
	return (
		<Exercise title="Exercise 32" description={description} solution={solution}>
			User ID: {userId}
		</Exercise>
	);
};

export default Exercise32;
