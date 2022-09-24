'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'usuarios',
          key: 'id',
          as: 'reserva_usuario',
        },
      },
      id_quarto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'quartos',
          key: 'id',
          as: 'reserva_quarto',
        },
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

    });
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('reservas');
  }
};