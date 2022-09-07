import UpdateUserService from "../../services/User/UpdateUserService";

export default class UpdateUserController {
    constructor() {
        this.service = new UpdateUserService();
    }

    async atualizaUsuario(request, response) {
        const { id } = request.params;
        const novasInfos = request.body;
        const usuarioAtualizado = await this.service.update(id, novasInfos);
        return response.json(usuarioAtualizado);
    }
}