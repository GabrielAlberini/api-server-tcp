import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const options = {
  port: process.env.PORT,
  host: process.env.HOST,
};

const clientTCP = net.createConnection(options);

clientTCP.on("connect", () => {
  console.log("Me conecte a un servidor :)");
  const request = process.argv.splice(2);
  clientTCP.write(JSON.stringify(request));
});

clientTCP.on("data", (jsonData) => {
  console.log("El server me mando un mensaje *-*");
  const data = JSON.parse(jsonData.toString());
  console.log(data);
  clientTCP.end();
});
