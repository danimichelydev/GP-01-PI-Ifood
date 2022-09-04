import UsuarioRepository from "../models/UserModel.js";

class UserController {
  static async listarUsuarios(req, res) {
    try {
      const usuarios = await UsuarioRepository.findAll();
      res.status(200).json(usuarios);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async listaUmUsuario(req, res) {
    const { id } = req.params;
    try {
      const umUsuario = await UsuarioRepository.findOne({
        where: { id: Number(id) }
      }).
        then((umUsuario) => res.json(umUsuario));
    } catch {
      return res.status(400).json({ messagem: 'Usuário não encontrado' });
    }
  }

  static async addUsuario(req, res) {
    const novoUsuario = req.body;
    try {
      const novoUsuarioCriado = await UsuarioRepository.create(novoUsuario).
        then((novoUsuarioCriado) => res.status(200).json(novoUsuarioCriado));
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async atualizaUsuario(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await UsuarioRepository.update(novasInfos,
        { where: { id: Number(id) } });
      const usuarioAtualizado = await UsuarioRepository.findByPk(req.params.id).
        then((usuarioAtualizado) => res.status(200).json(usuarioAtualizado));
    } catch {
      return res.status(400).json(error.message);
    }
  }

  static async deletaUsuario(req, res) {
    const { id } = req.params;
    try {
      await UsuarioRepository.destroy({
        where: { id: Number(id) }
      });
      return res.status(200).json({ messagem: 'Usuário deletado com sucesso!' })
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default UserController;
