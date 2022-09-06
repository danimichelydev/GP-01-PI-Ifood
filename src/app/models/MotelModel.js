import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database.js";
import EnderecoModel from "../models/EnderecoModel.js";

const sequelize = new Sequelize(databaseConfig);

class MotelModel extends Model { }

MotelModel.init({
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
    cnpj: {
        type: Sequelize.STRING(18),
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING(6),
        allowNull: false
    }
},
    {
        sequelize,
        modelName: "Moteis",
        timestamps: false,
        underscored: true,
    });

export default MotelModel;