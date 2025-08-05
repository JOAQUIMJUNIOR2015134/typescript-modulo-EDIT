# typescript-modulo-EDIT
Typescript initiation

## Roteiro de Aula (Português de Portugal)

### Dia 1: Tipos Básicos + Exercícios de Reforço
**Roteiro:**
- Diferença entre JavaScript e TypeScript.
- Tipos primitivos: number, string, boolean.
- Declarar variáveis com tipos explícitos.
- Arrays e tuplos.
- Exercícios de reforço para consolidar conhecimentos.

**Exercícios Básicos:**
1. Declare uma variável 'age' do tipo number e atribua-lhe o valor 25.
2. Crie uma variável string 'studentName' e atribua-lhe o seu nome.
3. Crie uma variável booleana 'isActive' e defina-a como true.
4. Crie um array de números chamado 'scores'.
5. Crie um tuplo para um produto: [string, number].

**Exercícios de Reforço (Aprendizagem):**
26. Reescreva um dos exercícios anteriores usando um tipo diferente (por exemplo, troque number por string).
27. Crie uma função que recebe um array de strings e retorna o tamanho do maior elemento.
28. Crie um objeto com propriedades opcionais e aceda a elas de forma segura.
29. Escreva uma função que recebe um parâmetro do tipo união (string | number) e retorna uma string formatada.
30. Crie uma interface para um produto e adicione um método para calcular o preço com desconto.
31. Use um enum para representar diferentes estados de um pedido (ex: Pendente, Pago, Enviado).
32. Crie um array de objetos tipados e filtre os elementos com base numa propriedade.
33. Escreva uma função genérica que recebe dois argumentos e retorna um array com ambos.
34. Crie um componente React que recebe uma lista de utilizadores e renderiza os nomes.
35. Use Partial para criar um objeto de configuração onde todas as propriedades são opcionais.
36. Escreva uma função que recebe um objeto e uma chave (keyof) e retorna o valor correspondente.
37. Crie um tipo que combine duas interfaces usando interseção (&) e use-o numa função.
38. Implemente um hook React personalizado que retorna um valor booleano e uma função para alterná-lo.
39. Crie um componente React que utiliza um enum para renderizar diferentes mensagens consoante o estado.
40. Crie uma função TypeScript 2025 usando arrow function syntax que aceita um tipo 'unknown' e verifica seguramente se é uma string antes de a usar.

### Dia 2: Funções & Objetos
**Roteiro:**
- Revisão rápida dos conceitos do dia anterior.
- Introdução à tipagem de funções: parâmetros e retorno.
- Explicar parâmetros opcionais e valores por defeito.
- Apresentar tipos de objetos e como tipar métodos.

**Exercícios:**
6. Escreva uma função que soma dois números.
7. Crie um tipo de objeto para um utilizador com nome e idade.
8. Escreva uma função com um parâmetro opcional.
9. Escreva uma função com um parâmetro por defeito.
10. Crie um objeto com um método que soma dois números.

### Dia 3: Interfaces, Enums, Tipos União & Interseção
**Roteiro:**
- Introdução às interfaces e à sua utilidade na tipagem de objetos.
- Explicar enums e quando os usar.
- Apresentar tipos união e interseção.

**Exercícios:**
11. Crie uma interface para um carro com marca e ano.
12. Crie um enum para cores.
13. Use um tipo união para uma variável que pode ser string ou number.
14. Use um tipo interseção para uma pessoa que é estudante e trabalhador.
15. Escreva uma função que aceita um parâmetro string ou number e retorna o seu comprimento (se string) ou valor (se number).

### Dia 4: Genéricos, Type Assertions, Tipos Avançados
**Roteiro:**
- Explicar o conceito de genéricos e a sua importância para componentes reutilizáveis.
- Introduzir type assertions e quando são necessários.
- Apresentar tipos utilitários como Readonly, Partial e Record.

**Exercícios:**
16. Crie uma função genérica que retorna o primeiro elemento de um array.
17. Use type assertion para tratar uma variável como outro tipo.
18. Crie um objeto Readonly.
19. Use Partial para tornar todas as propriedades de um tipo opcionais.
20. Use Record para criar um tipo com chaves string e valores number.

### Day 5: TypeScript in React & Utility Types
**Script:**
- Introduction to integrating TypeScript with React.
- How to type props and state in functional components.
- Introducing utility types: Pick and Omit.
- Discussing common patterns in React applications with TypeScript.

**Exercises:**
21. Create a React functional component that accepts props with a typed interface.
22. Use the useState hook with a typed state variable.
23. Create a component that receives a callback function as a prop and types it.
24. Use the Pick utility type to select specific properties from a type.
25. Use the Omit utility type to exclude a property from a type.

---

### Notas Importantes:
- **Exercícios 26-40** são exercícios de reforço que consolidam os conhecimentos adquiridos nos dias anteriores.
- Todos os exercícios estão implementados como componentes React funcionais.
- Cada exercício inclui uma descrição, solução e demonstração prática.
- Os exercícios de reforço (26-40) são exibidos no Dia 1 da aplicação para facilitar o acesso.
- Pratique, experimente variações e tente explicar cada solução em voz alta ou a um colega. 
