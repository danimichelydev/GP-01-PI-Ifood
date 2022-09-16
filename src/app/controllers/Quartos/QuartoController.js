import QuartoRepository from '../../models/ModelQuartos.js';

export default class QuartoController {
  async listarQuartos(req, res) {
    const { idMotel } = req.params;
    try {
      const todosQuartos = await QuartoRepository.findAll({
        where: { id: Number(idMotel) }
      });
      return res.status(200).json(todosQuartos);
    } catch (error) {
      console.log(error)
      return res.status(400).json(error.message);
    }
  }

  // listar um quarto
  async listaUmQuarto(req, res) {
    const { id } = req.params;
    try {
      const umQuarto = await MotelRepository.findOne({
        where: { id: Number(id) },
      }).then(umQuarto => res.json(umQuarto));
    } catch (error) {
      return res.status(400).json({ messagem: 'Quarto não disponível' });
    }
  }

  // adiciona um quarto
  async addQuarto(req, res) {
    try {
      let dadosQuarto = req.body;
      let quarto = await QuartoRepository.create(dadosQuarto);
      res.status(200).json({ messagem: 'Quarto criado com sucesso!' });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  // atualiza um quarto
  async atualizaQuarto(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await QuartoRepository.update(novasInfos, { where: { id: Number(id) } });
      const quartoAtualizado = await QuartoRepository.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(quartoAtualizado);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  // deleta um quarto
  async deletaQuarto(req, res) {
    const { id } = req.params;
    try {
      await QuartoRepository.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ messagem: 'Quarto deletado com sucesso!' });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
};


