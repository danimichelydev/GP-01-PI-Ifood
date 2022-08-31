//const app = require("./app");
import app from "./app.js";
import db from "../src/db.js";

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(3000);
