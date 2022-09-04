import MotelRepository from '../models/MotelModel.js'
import EnderecoRepository from '../models/EnderecoModel.js'

class MotelController {
  static async listarMoteis(req, res) {
    try {
      const todosMoteis = await MotelRepository.findAll();
      return res.status(200).json(todosMoteis);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async listaUmMotel(req, res) {
    const { id } = req.params;
    try {
      const umMotel = await MotelRepository.findOne(
        {
          where: { id: Number(id) }
        }).
        then((umMotel) => res.json(umMotel));
    } catch (error) {
      return res.status(400).json({ messagem: 'Motel não encontrado' });
    }
  }

  static async addMotel(req, res) {
    try {
      let endereco = req.body.endereco;
      let motel = await MotelRepository.create(req.body);
      endereco.idMotel = motel.id;
      await EnderecoRepository.create(endereco);
      res.status(200).json({messagem: 'Motel criado com sucesso!'});
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async atualizaMotel(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await MotelRepository.update(
        novasInfos,
        { where: { id: Number(id) } });
      const motelAtualizado = await MotelRepository.findOne({ where: { id: Number(id) } })
      return res.status(200).json(motelAtualizado);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
  
  static async deletaMotel(req, res) {
    const { id } = req.params;
    try {
      await MotelRepository.destroy({ where: { id: Number(id) }});
      return res.status(200).json({messagem: 'Motel deletado com sucesso!'});
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default MotelController;
