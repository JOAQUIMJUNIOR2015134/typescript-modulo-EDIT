import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a TypeScript 2025 interface for a product with satisfies operator to ensure type safety and optional properties";
const solution =
	"interface Product { id: number; name: string; price: number; description?: string; } const product = { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop' } satisfies Product;";

const Exercise31: React.FC = () => {
	interface Product {
		id: number;
		name: string;
		price: number;
		description?: string;
	}

	const product1 = {
		id: 1,
		name: "Laptop",
		price: 999,
		description: "High-performance laptop",
	} satisfies Product;

	const product2 = {
		id: 2,
		name: "Mouse",
		price: 25,
	} satisfies Product;

	return (
		<Exercise title="Exercise 31" description={description} solution={solution}>
			Product 1: {product1.name} - ${product1.price} - {product1.description}
			<br />
			Product 2: {product2.name} - ${product2.price}
		</Exercise>
	);
};

export default Exercise31;
