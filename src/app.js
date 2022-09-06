import express from "express";
import db from "./database/index.js";
import routes from "./routes.js";
import rel from './config/relational.js';

class App {
  constructor() {
    this.server = express();

    this.initializeDatabase();
    rel.relacoes();
    this.middlewares();
    this.routes();
    
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  async initializeDatabase() {
    try {
      await db.authenticate();
      console.log("Conexão com o banco de dados realizada com sucesso");
    } catch (error) {
      console.log(
        "Não foi possível conectar ao banco de dados: ",
        error.message
      );
    }
  }
}


export default new App().server;