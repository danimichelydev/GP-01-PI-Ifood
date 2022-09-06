'use strict';
const { Model } = require('sequelize');
const sequelize = new Sequelize(databaseConfig);

class QuartosModel extends Model{ }



QuartosModel.init({
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    valor_quarto: DataTypes.FLOAT
  }, 
  {
    sequelize,
    modelName: 'Quartos',
  });


export default QuartosModel;