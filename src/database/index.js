import { Sequelize } from "sequelize";
import databaseConfig from "../config/database.js";

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
  }
}

export default new Database().connection;