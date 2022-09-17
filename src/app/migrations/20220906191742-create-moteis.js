'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('moteis', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nome: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            cnpj: {
                type: Sequelize.STRING(18),
                allowNull: false,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('moteis');
    },
};
