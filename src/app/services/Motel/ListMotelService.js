import MotelModel from '../../models/MotelModel';
import EnderecoModel from '../../models/EnderecoModel';

export default class ListMotelService {
  constructor() {}

  async listAll() {
    try {
      const moteis = await MotelModel.findAll({
        include: {
          model: EnderecoModel,
          attributes: ['bairro'],
          as: 'endereco',
        },
      });
      return moteis;
    } catch (error) {
      return { erro: error.message };
    }
  }

  async listOne(nomeMotel) {
    try {
      const umMotel = await MotelModel.findOne({
        where: { nome: nomeMotel },
      });
      if (!umMotel) {
        return { erro: 'Motel não encontrado.' };
      }

      return umMotel;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }

  async listAllByBairro(nomeBairro) {
    try {
      const moteis = await EnderecoModel.findAll({
        include: {
          model: MotelModel,
          attributes: ['nome'],
          as: 'moteis',
        },

        attributes: ['rua', 'numero'],
        where: { bairro: nomeBairro },
      });
      if (!moteis || moteis.length < 1) {
        return { erro: 'Não há motéis cadastrados nesse bairro.' };
      }
      return moteis;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
