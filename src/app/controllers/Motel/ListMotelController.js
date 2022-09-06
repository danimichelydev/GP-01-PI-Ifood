import ListMotelService from "../../services/Motel/ListMotelService";

export default class ListMotelController {
    constructor() {
        this.service = new ListMotelService();
    }

    async listarMoteis(request, response) {
        const moteis = await this.service.listAll()

        return response.json(moteis);
    }

    async listaUmMotel(request, response) {
        const { nome } = request.query;
        const umMotel = await this.service.listOne(nome);

        return response.json(umMotel);
    }
}