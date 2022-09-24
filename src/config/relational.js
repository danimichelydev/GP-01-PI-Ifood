import MotelModel from '../../src/app/models/MotelModel.js';
import EnderecoModel from '../../src/app/models/EnderecoModel.js';
import QuartosModel from '../app/models/ModelQuartos.js';
import ReservaModel from '../app/models/ReservaModel.js';
import UsuarioModel from '../app/models/UserModel.js';

//as relacoes ficaram separadas igual a do pokedex
function relacoes() {
    MotelModel.hasOne(EnderecoModel, {
        foreignKey: 'id_motel',
        as: 'endereco',
        onDelete: 'CASCADE',
    });

    EnderecoModel.belongsTo(MotelModel, {
        foreignKey: 'id_motel',
        as: 'moteis',
    });

    MotelModel.hasMany(QuartosModel, {
        foreignKey: 'id_motel',
        as: 'quarto',
        onDelete: 'CASCADE',
    });

    QuartosModel.belongsTo(MotelModel, {
        foreignKey: 'id_motel',
    });
    QuartosModel.hasMany(ReservaModel, {
        foreignKey: 'id_quarto',
        as: 'reserva',
        onDelete: 'CASCADE',
    });
    ReservaModel.belongsTo(QuartosModel, {
        foreignKey: 'id_quarto',
    });
    UsuarioModel.hasMany(ReservaModel, {
        foreignKey: 'id_usuario',
        as: 'reserva',
        onDelete: 'CASCADE',
    });
    ReservaModel.belongsTo(UsuarioModel, {
        foreignKey: 'id_usuario',
    });    

}

export default { relacoes };
