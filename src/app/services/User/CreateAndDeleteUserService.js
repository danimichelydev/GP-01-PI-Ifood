import UsuarioModel from "../../models/UserModel";
import HashPassword from "../../utils/HashPassword";

export default class CreateAndDeleteUserService {
  constructor() { }

  async create(nome, email, cpf, dataNascimento, senha) {

    const hashedPassword = HashPassword.hash(senha);

    try {
      const novoUsuario = await UsuarioModel.create({
        nome, email, cpf, dataNascimento, senha: hashedPassword
      });

      return ([novoUsuario.id, novoUsuario.nome, novoUsuario.email])
    } catch (error) {
      return { erro: error.message };
    }
  }

  async delete(id) {
    try {
      const usuario = await UsuarioModel.findByPk(id);

      if (!usuario) {
        return { sucess: false, mensagem: "Usuário não encontrado" }
      }

      const usuarioDeletado = await usuario.destroy();
      return { message: 'Usuário deletado com sucesso!' };
    } catch (error) {
      return { erro: error.message }
    }
  }
}