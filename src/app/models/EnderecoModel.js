import { Sequelize } from "sequelize";
import db from "../../db.js";
import motel from "./MotelModel.js";

const endereco = db.define("endereco", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    rua: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    numero: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
    bairro: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    cidade: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    cep: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
});
export default endereco;