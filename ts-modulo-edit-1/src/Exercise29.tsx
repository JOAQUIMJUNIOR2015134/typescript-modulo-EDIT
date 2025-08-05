import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a TypeScript 2025 interface for a user object and use satisfies operator to ensure type safety";
const solution =
	"interface User { id: number; name: string; email: string; isActive: boolean; } const user = { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true } satisfies User;";

const Exercise29: React.FC = () => {
	interface User {
		id: number;
		name: string;
		email: string;
		isActive: boolean;
	}

	const user = {
		id: 1,
		name: "Alice",
		email: "alice@example.com",
		isActive: true,
	} satisfies User;

	return (
		<Exercise title="Exercise 29" description={description} solution={solution}>
			User: {user.name} ({user.email}) - Active: {user.isActive ? "Yes" : "No"}
		</Exercise>
	);
};

export default Exercise29;
