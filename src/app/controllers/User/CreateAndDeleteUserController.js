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
      return response.status(400).send({ erro: 'Menor de idade.' });
    }
    const novoUsuarioCriado = await this.service.create(
      nome,
      email,
      cpf,
      dataNascimento,
      senha
    );

    if (novoUsuarioCriado.erro) {
      return response.status(400).json(novoUsuarioCriado);
    }
    return response.status(201).json(novoUsuarioCriado);
  }

  async deletaUsuario(request, response) {
    const { id } = request.params;
    const resultado = await this.service.delete(id);
    if (resultado.sucess == false) {
      return response.status(400).json(resultado);
    }
    return response.status(200).json(resultado);
  }
}
