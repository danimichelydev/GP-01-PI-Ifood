import ListUserService from "../../services/User/ListUserService.js";

export default class ListUserController {
    constructor() {
        this.service = new ListUserService();
    }

    async listarUsuarios(request, response) {
        const usuarios = await this.service.listAll()

        response.json(usuarios);
    }

    async listaUmUsuario(request, response) {
        const { nome } = request.query;
        const umUsuario = await this.service.listOne(nome);

        response.json(umUsuario)
    }
}