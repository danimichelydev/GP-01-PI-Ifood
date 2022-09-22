import QuartosModel from '../../models/ModelQuartos.js';

export default class QuartoService {
    constructor() { }

    async listAll(idMotel) {
        try {
            const todosQuartos = await QuartosModel.findAll({
                where: { id_motel: Number(idMotel) }
            });
            return todosQuartos
        } catch (error) {
            return { erro: error.message };
        }
    }

    async listOne(id) {
        try {
            const umQuarto = await QuartosModel.findOne({
                where: { id: Number(id) }
            })
            return umQuarto;
        } catch (error) {
            return { messagem: 'Quarto não disponível' };
        }
    }

    async create(dadosQuarto) {
        try {
            let quartoCriado = await QuartosModel.create(dadosQuarto);
            return quartoCriado;
        } catch (error) {
            return { erro: error.message };
        }
    }

    async update(id, novasInfos) {
        try {
            const quartoExiste = await QuartosModel.findByPk(id);
            if (!quartoExiste) {
              return { sucess: false, mensagem: "Quarto não encontrado" }
            }
      
            const [quartoAtualizado] = await QuartosModel.update(novasInfos,
              {
                where: { id },
              });
      
            if (quartoAtualizado === 0) {
              return { sucess: false, mensagem: "Dados iguais" };
            } else {
              return novasInfos;
            };
          } catch (error) {
            return { sucess: false, message: error.message };
          }
        }

    async delete(id) {
        try {
            const quartoExiste = await QuartosModel.findByPk(id);

            if (!quartoExiste) {
                return { sucess: false, mensagem: "Quarto não encontrado" }
            }

            const quartoDeletado = await quartoExiste.destroy();
            return { message: 'Quarto deletado com sucesso!' };
        } catch (error) {
            return { erro: error.message }
        }
    }
};


