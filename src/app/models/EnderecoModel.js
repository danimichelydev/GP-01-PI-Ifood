import Sequelize, { Model } from 'sequelize';
import databaseConfig from '../../config/database.js';

const sequelize = new Sequelize(databaseConfig);

class EnderecoModel extends Model {}

EnderecoModel.init(
    {
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
    },
    {
        sequelize,
        modelName: 'enderecos',
        timestamps: false,
        underscored: true,
    }
);

export default EnderecoModel;
