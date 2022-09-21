'use strict';
import Sequelize, { Model } from 'sequelize';
import databaseConfig from '../../config/database.js';

const sequelize = new Sequelize(databaseConfig);

class QuartosModel extends Model {}

QuartosModel.init(
    {
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
        valor_quarto: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        acessorios_quarto: {
            type: Sequelize.ENUM({
                values: ['s', 'p', 'i'],
            }),
            allowNull: false,
        },
        status_quarto: {
            type: Sequelize.ENUM({
                values: ['disponivel', 'indisponivel'],
            }),
        },
    },

    {
        sequelize,
        modelName: 'quartos',
        timestamps: false,
        underscored: true,
    }
);

export default QuartosModel;
