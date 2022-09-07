'use strict';
const { Model } = require('sequelize');
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
    valor_quarto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    acessorios_quarto: {
      type: DataTypes.ENUM({
        values: ['s', 'p', 'i'],
      }),
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: 'Quartos',
  }
);

export default QuartosModel;
