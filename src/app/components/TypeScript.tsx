"use client"
import React, { useState } from "react";
import { JSX } from "react";

// Interface es para tipar objetos nada mas

interface porps {
  name: string;
  age: number;
}

type style = {
  style: React.CSSProperties; // React nos provee de un tipado para facilitar el tipado de CSS
};

//tipeando un objeto que tiene key como string y valores como number
type objetc = {
  objeto: Record<string, number>;
};

//Tipeando un tipo de dato
type color = "red" | "blue" | "green" | "yellow" | "black" | "white";

type TypeScriptProps = {
  id: number;
  name: string;
  surname: string;
  adult: boolean;
  color: color;
  list: number[]; //Array de este tipo
  Tupple: [number, number, number]; // deberan ser si o si 3 elementos del tipo number
  function: () => void; //Funcion que no recibe parametros y no retorna nada
  function2: (id: number) => number; //Funcion que recibe un parametro y no retorna nada Ver funcion TypeScript 2
};

// Podemos heredar de otro tipado y agregarle nuevos tipos a un nuevo tipado
type TypeScriptProps2 = TypeScriptProps & {
  age: number;
};

//Tipado opcional para que en donde este invocando la funcion no deba si o si pedirle el parametro
type TypeScriptPropsOptional = {
  name: string;
  surname?: string;
  adult?: boolean;
};
//tipado de componente aparte
export const TypeScript = ({ name }: TypeScriptProps) => {
  return <div>TypeScript</div>;
};

//simula que hay 2 componentes, uno es la pagina y el otro es donde se invoca la funcion y se pasa por prop una funcion al boton desde un componente padre
//////////////////////////////////////////////////////////////////////////////////////////

type ButtonProps = {
  handleFunctionVoid: () => void;
  handleClick: (number: number) => number;
};

export const Home = () => {
  const handleClick = (number: number) => {
    return number;
  };
  const handleFunctionVoid = () => {};
  return (
    <main>
      <Button
        handleFunctionVoid={handleFunctionVoid}
        handleClick={handleClick}
      ></Button>
    </main>
  );
};
const Button: React.FC<ButtonProps> = ({ handleFunctionVoid, handleClick }) => {
  return (
    <div>
      <button onClick={() => handleClick(4)}>TypeScript2</button>;
      <button onClick={() => handleFunctionVoid}>TypeScript2</button>;
    </div>
  );
};

//////////////////////////////////////////////////////////////////////////////////////////

//tipado de componente en linea
export const TypeScript3 = ({ color, age }: { color: string; age: number }) => {
  return <div>TypeScript2</div>;
};

//Tipeando el return value para un jsx element
export const TypeScript4 = ({
  color,
  age,
}: {
  color: string;
  age: number;
}): JSX.Element => {
  return <button>TypeScript2</button>;
};

//Tipeando un componente que recibe un children

const HomePage = () => {
  return <Children>TypeScript</Children>;
};

export const Children = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};


//tipando un hook
type user = {
  name: string;
  age: number;}

export const HookTyping = () => {
  const [first, setfirst] = useState <number>(2)
  const [user, setuser] = useState<user|null>(null)
  return (
    <div>TypeScript</div>
  )
}
