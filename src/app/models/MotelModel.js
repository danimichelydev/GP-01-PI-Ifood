import { Sequelize } from "sequelize";
import db from "../../db.js";
import endereco from "../models/EnderecoModel.js"

const motel = db.define("moteis", {
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
        allowNull: false,
    },
});

    motel.hasOne(endereco, {
        foreignKey: "idMotel",
        as: "endereco"
    });

    endereco.belongsTo(motel, {
        foreignKey: "idMotel",
        as: 'motel'
    })

export default motel;