'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('quartos', {
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
                allowNull: false,
            },
            //
            // para relacoes colocar tipo, on delete(pra deleter quando a relação for deletada)
            id_Motel: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'moteis',
                    key: 'id',
                    as: 'quartos',
                },
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('quartos');
    },
};
