import MotelModel from '../../models/MotelModel';
import EnderecoModel from '../../models/EnderecoModel';
import ListMotelService from './ListMotelService';

export default class UpdateMotelService {
    constructor() {
        this.service = new ListMotelService();
    }

    async update(id, novasInfos) {
        try {
            const encontraMotel = await MotelModel.findByPk(id);
            if (!encontraMotel) {
                return { sucess: false, mensagem: "Motel não encontrado" }
            }

            let { endereco } = novasInfos
            let [motelAlterado] = await MotelModel.update(novasInfos, {
                where: { id: Number(id) }
            });
            endereco.idMotel = motelAlterado.id
            let [enderecoAlterado] = await EnderecoModel.update(endereco, {
                where: { idMotel: Number(id) }
            });

            if (enderecoAlterado === 1 || motelAlterado === 1) {
                return novasInfos
            } else {
                return { sucess: false, mensagem: "Dados iguais" }
            }
        } catch (error) {
            return { sucess: false, message: error.message };
        }
    }
};
