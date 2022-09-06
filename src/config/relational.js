import MotelModel from '../../src/app/models/MotelModel.js';
import EnderecoModel from '../../src/app/models/EnderecoModel.js';
//as relacoes ficaram separadas igual a do pokedex
function relacoes () {
    MotelModel.hasOne(EnderecoModel, {
        foreignKey: "idMotel",
        as: "endereco",
        onDelete: "CASCADE"
    });
    
    EnderecoModel.belongsTo(MotelModel);
}

export default { relacoes };


