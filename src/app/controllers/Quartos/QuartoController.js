import { response } from "express";
import QuartoService from "../../services/Quarto/QuartoService";
export default class QuartoController {
  constructor() {
    this.service = new QuartoService();
  }

  async listarQuartos(req, res) {
    const { id_motel } = req.params;
    const todosQuartos = await this.service.listAll(id_motel)
    return res.json(todosQuartos);
  }

  async listaUmQuarto(req, res) {
    console.log(req.params)
    const { id } = req.params;
    const umQuarto = await this.service.listOne(id);
    return res.json(umQuarto);
  }

  async addQuarto(req, res) {
    let dadosQuarto = req.body;
    let quarto = await this.service.create(dadosQuarto)
    return res.json(quarto);
  }

  async atualizaQuarto(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    const quartoAtualizado = await this.service.update(id, novasInfos);
    return res.json(quartoAtualizado);
  }

  async deletaQuarto(req, res) {
    const { id } = req.params;
    const resultado = await this.service.delete(id);
    if (resultado.sucess == false) {
      return res.status(400).json(resultado);
    }
    return res.status(200).json(resultado);
  }
};


