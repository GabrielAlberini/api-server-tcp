import fs from "node:fs";

const readData = () => {
  const jsonData = fs.readFileSync("./database/pizza.json", "utf-8");
  const pizzas = JSON.parse(jsonData);
  return pizzas;
};

const writeData = (jsonData) => {
  fs.writeFileSync("./database/pizza.json", jsonData);
};

export { readData, writeData };
