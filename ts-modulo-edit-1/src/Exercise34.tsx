import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a TypeScript 2025 interface for a configuration object with satisfies operator and readonly properties";
const solution =
	"interface Config { readonly apiUrl: string; readonly timeout: number; debug: boolean; } const config = { apiUrl: 'https://api.example.com', timeout: 5000, debug: true } satisfies Config;";

const Exercise34: React.FC = () => {
	interface Config {
		readonly apiUrl: string;
		readonly timeout: number;
		debug: boolean;
	}

	const config = {
		apiUrl: "https://api.example.com",
		timeout: 5000,
		debug: true,
	} satisfies Config;

	return (
		<Exercise title="Exercise 34" description={description} solution={solution}>
			Config: {config.apiUrl} - Timeout: {config.timeout}ms - Debug:{" "}
			{config.debug ? "On" : "Off"}
		</Exercise>
	);
};

export default Exercise34;
