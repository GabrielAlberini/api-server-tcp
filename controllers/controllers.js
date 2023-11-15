import { readData, writeData } from "../utils/utils.js";

// getters -> funciones que toman datos de la db
const getPizzas = () => {
  const pizzas = readData();
  return pizzas;
};

const getPizzaById = (id) => {
  const pizzas = readData();
  const pizza = pizzas.find((pizza) => pizza.id === id);
  return pizza;
};

// setters -> fun ciones que modifican la db
const addPizza = (nuevaPizza) => {
  const pizzas = readData();
  const pizza = pizzas.find((pizza) => pizza.nombre === nuevaPizza.nombre);
  if (pizza) {
    return "Ya existe la pizza :(";
  }
  pizzas.push(nuevaPizza);
  writeData(JSON.stringify(pizzas));
  return "Pizza agregada con éxito :)";
};

const deletePizzaById = (id) => {
  const pizzas = readData();
  const pizza = pizzas.find((pizza) => pizza.id === id);
  if (pizza) {
    const nuevasPizzas = pizzas.filter((pizza) => pizza.id !== id);
    writeData(JSON.stringify(nuevasPizzas));
    return "Pizza borrada con exito o.o";
  }
  return "La pizza no existe :O";
};

console.log(deletePizzaById(2));

export { getPizzas, getPizzaById, addPizza, deletePizzaById };
