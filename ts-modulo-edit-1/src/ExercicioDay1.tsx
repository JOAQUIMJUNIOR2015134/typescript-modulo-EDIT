import React from "react";

// **Exercícios:**
// 1. Declare uma variável 'age' do tipo number e atribua-lhe o valor 25.
// 2. Crie uma variável string 'studentName' e atribua-lhe o seu nome.
// 3. Crie uma variável booleana 'isActive' e defina-a como true.
// 4. Crie um array de números chamado 'scores'.
// 5. Crie um tuplo para um produto: [string, number].

// 1. Declare uma variável 'age' do tipo number e atribua-lhe o valor 25.
const Exercicio01 = () => {
  const age: number = 25;

  return (
    <div>
      <h1>A minha idade {age}</h1>
    </div>
  );
};

export { Exercicio01 };

// 2. Crie uma variável string 'studentName' e atribua-lhe o seu nome.

const Exercicio02 = () => {
  const studenteName: string = "Joaquim";
  return (
    <div>
      <h1>O meu nome é {studenteName}</h1>
    </div>
  );
};

// 3. Crie uma variável booleana 'isActive' e defina-a como true.

const Exercicio03 = () => {
  const isActive: boolean = true;
  return (
    <div>
      <h1>{isActive ? "Ativo" : "Inativo"}</h1>
    </div>
  );
};

export { Exercicio03 };
// 4. Crie um array de números chamado 'scores'.

const Exercicio04 = () => {
  const score: [number, number, number] = [90, 80, 70];
  return (
    <div>
      <h1>As minhas pontuações são {score}</h1>
    </div>
  );
};

export { Exercicio04 };

// 5. Crie um tuplo para um produto: [string, number].

const Exercicio05 = () => {
  const product: [string, number] = ["Book", 10];
  return (
    <div>
      <h1>
        O {product[0]} custa {product[1]}
      </h1>
    </div>
  );
};

export { Exercicio05 };

const name: string = "Joaquim";
const number: number[] = [1, 2, 3, 4, 5];
const add = (a: number, b: number): number => a + b;

interface User {
  id: number;
  name: string;
  email: string;
}
const luisa: User = { id: 1, name: "Luisa", email: "luisa@example.com" };

// Convert this JavaScript variable declaration to TypeScript 2025 with explicit typing and const assertion: 'let name = "John"'
const Exercicio26 = () => {
  const name01: string = "john" as const;

  return <h1>O meu nome é {name01}</h1>;
};

// Convert this JavaScript array to TypeScript 2025 with satisfies operator: 'let numbers = [1, 2, 3, 4, 5]'
const Exercicio27 = () => {
  const numbers = [1, 2, 3, 4, 5] satisfies number[];
  return <h1>Os números são: {numbers.join(", ")}</h1>;
};

// Convert this JavaScript function to TypeScript 2025 with arrow function and explicit return type: 'function add(a, b) { return a + b; }'

const Exercicio28 = () => {
  const add = (a: number, b: number): number => a + b;

  return <h1>A soma de 2 e 3 é {add(2, 3)}</h1>;
};

// Create a TypeScript 2025 interface for a user object and use satisfies operator to ensure type safety

// User: Alice (alice@example.com) - Active: Yes

const Exercicio29 = () => {
  interface User {
    name: string;
    email: string;
    isActive: boolean;
  }

  const user: User = {
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
  };
};

// Create a variable using TypeScript 2025 union types that can hold either a string or a number, with type inference

// Value: hello (Type: string)
const Exercicio30 = () => {
  const value: string | number = "hello";

  return <h1>O valor é {value}</h1>;
};

// Create a TypeScript 2025 interface for a product with satisfies operator to ensure type safety and optional properties

const Exercicio32 = () => {
  interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property
  }

  const product: Product = {
    id: 1,
    name: "Laptop",
    price: 1500,
    description: "A high-performance laptop",
  } satisfies Product;

  return (
    <h1>
      O produto {product.name} custa {product.price} euros
    </h1>
  );
};

// Create a TypeScript 2025 type alias called 'UserId' for number and use it with const assertion

const Exercicio33 = () => {
  type UserId = number;
  const userId: UserId = 123 as const;

  return <h1>O ID do utilizador é {userId}</h1>;
};

// Create a variable using TypeScript 2025 literal types that can only have the values 'red', 'green', or 'blue' with const assertion
const Exercicio34 = () => {
  const color: "red" | "green" | "blue" = "red" as const;

  return <h1>A cor é {color}</h1>;
};

// Create a TypeScript 2025 interface for a configuration object with satisfies operator and readonly properties

// Config: https://api.example.com - Timeout: 5000ms - Debug: On

const Exercicio35 = () => {
  const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    debug: true,
  } satisfies { apiUrl: string; timeout: number; debug: boolean };

  return <h1>Configuração: {JSON.stringify(config)}</h1>;
};
