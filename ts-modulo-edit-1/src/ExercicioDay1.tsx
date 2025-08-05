import React from 'react';


// **Exercícios:**
// 1. Declare uma variável 'age' do tipo number e atribua-lhe o valor 25.
// 2. Crie uma variável string 'studentName' e atribua-lhe o seu nome.
// 3. Crie uma variável booleana 'isActive' e defina-a como true.
// 4. Crie um array de números chamado 'scores'.
// 5. Crie um tuplo para um produto: [string, number].

// 1. Declare uma variável 'age' do tipo number e atribua-lhe o valor 25.
const Exercicio01 = () => {

 const age: number =25;

    return (
        <div>
            <h1>A minha idade {age}</h1>
        </div>
    )
};

export default Exercicio01;

// 2. Crie uma variável string 'studentName' e atribua-lhe o seu nome.

const Exercicio02 = () => {

    const studenteName: string ="Joaquim";
    return (
        <div>
            <h1>O meu nome é {studenteName}</h1>
        </div>
    )
}

// 3. Crie uma variável booleana 'isActive' e defina-a como true.

const Exercicio03 = () => {

    const isActive:boolean=true;
    return(
        <div>
            <h1>{isActive ? "Ativo" : "Inativo"}</h1>
        </div>
    )
}

export function Exercicio03;
// 4. Crie um array de números chamado 'scores'.

const Exercicio04 =()=>{

    const scores:number=[10, 20, 30, 40 , 50]
    return(
        <div>
            <h1>As minhas pontuações são {scores.join(",")}</h1>
        </div>
    )
};

export function Exercicio04;

// 5. Crie um tuplo para um produto: [string, number].

const Exericio05 =()=>{
    const product:[string, number] =["Computador", 1500]
    return(
        <div>
            <h1>O {product[0]} custa {product[1]}</h1>
        </div>
    )
}

export function Exericio05;


const name:string='Joaquim';
const number:number[]=[1,2,3,4,5];
const add = (a: number, b:number):number=> a + b;

interface User{id:number, name:string, email:string};
const luisa:User = {id:1, name:"Luisa", email:"luisa@example.com"};
