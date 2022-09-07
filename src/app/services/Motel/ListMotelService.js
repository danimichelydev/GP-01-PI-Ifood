import MotelModel from '../../models/MotelModel';
import EnderecoModel from '../../models/EnderecoModel';

export default class ListMotelService {
    constructor() { };

    async listAll() {
        try {
            const moteis = await MotelModel.findAll();
            return moteis;
        } catch (error) {
            return { erro: error.message };
        }
    }

    async listOne(nomeMotel) {
        try {
            const umMotel = await MotelModel.findOne({
                where: { nome: nomeMotel }
            });

            if (!umMotel) {
                return { mensagem: "Motel não encontrado" };
            }
            return umMotel;
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}