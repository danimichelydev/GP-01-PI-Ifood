import CreateAndDeleteUserService from '../../services/User/CreateAndDeleteUserService.js';

export default class CreateAndDeleteUserController {
  constructor() {
    this.service = new CreateAndDeleteUserService();
  }

  async addUsuario(request, response) {
    const { nome, email, cpf, dataNascimento, senha } = request.body;
    const idade =
      new Date().getFullYear() - new Date(dataNascimento).getFullYear();
    if (idade < 18) {
      return res.status(400).send({ erro: 'Menor de idade.' });
    }
    const novoUsuarioCriado = await this.service.create(
      nome,
      email,
      cpf,
      dataNascimento,
      senha
    );

    return response.json(novoUsuarioCriado);
  }

  async deletaUsuario(request, response) {
    const { id } = request.params;
    const resultado = await this.service.delete(id);

    response.json({ messagem: 'Usuario deletado com sucesso!' });
  }
}
