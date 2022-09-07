// formato de criação do model

import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database.js";
const sequelize = new Sequelize(databaseConfig);

class UsuarioModel extends Model { }

UsuarioModel.init({
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
        type: Sequelize.STRING,
        allowNull: false,
    }
    },
    {
        sequelize,
        modelName: "Usuarios",
        timestamps: false,
        underscored: true,
    });

export default UsuarioModel;