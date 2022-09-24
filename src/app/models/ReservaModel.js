import Sequelize, { Model } from 'sequelize';
import databaseConfig from '../../config/database.js';

const sequelize = new Sequelize(databaseConfig);

class ReservaModel extends Model {}

ReservaModel.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_usuario: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_quarto: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        data_reserva: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        hora_reserva: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        status_reserva: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "Reservado",
        }
    },
    {
        sequelize,
        modelName: 'reserva',
        timestamps: false,
        underscored: true,
    });

export default ReservaModel;