import Sequelize, { Model } from 'sequelize';
import databaseConfig from '../../config/database.js';
import EnderecoModel from '../models/EnderecoModel.js';

const sequelize = new Sequelize(databaseConfig);

class MotelModel extends Model {}

MotelModel.init(
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
        cnpj: {
            type: Sequelize.STRING(18),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'moteis',
        timestamps: false,
        underscored: true,
    }
);

export default MotelModel;
