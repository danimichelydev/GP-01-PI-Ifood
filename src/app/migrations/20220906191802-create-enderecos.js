'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rua: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      // para relacoes colocar tipo, on delete(pra deleter quando a relação for deletada)
      id_Motel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
            model: "moteis",
            key: "id", 
            as: "endereco"
        },
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enderecos');
  }
};