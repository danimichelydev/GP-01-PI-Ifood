import MotelModel from '../../models/MotelModel';
import EnderecoModel from '../../models/EnderecoModel';

export default class CreateAndDeleteMotelService {
    constructor() { }

    async create(motel) {
        try {
            let { endereco } = motel;
            let motelExiste = await MotelModel.findOne({
                where: { cnpj: motel.cnpj },
            });
            if (motelExiste) {
                return { erro: 'Motel já existe!' };
            }
            let novoMotel = await MotelModel.create(motel);
            endereco.idMotel = novoMotel.id;
            await EnderecoModel.create(endereco);
            return ([novoMotel, endereco]);
        } catch (error) {
            return { erro: error.message };
        }
    }

    async delete(id) {
        try {
            const motel = await MotelModel.findByPk(id);

            if (!motel) {
                return { sucess: false, mensagem: "Motel não encontrado" }
            }

            const motelDeletado = await motel.destroy();
            return { message: 'Motel deletado com sucesso!' };
        } catch (error) {
            return { erro: error.message }
        }
    }
}