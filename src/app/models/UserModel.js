import { Sequelize } from "sequelize";
import db from "../../db.js";

export default db.define("usuario", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
    },
    cpf: {
        type: Sequelize.STRING(15),
        allowNull: false,
    },
    dataNascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING(6),
        allowNull: false,
    }
});