import CreateAndDeleteMotelService from "../../services/Motel/CreateAndDeleteMotelService";

export default class CreateAndDeleteMotelController {
    constructor() {
        this.service = new CreateAndDeleteMotelService();
    }

    async addMotel(request, response) {
        let endereco = request.body.endereco;
        let motel = await this.service.create(request.body);

        return response.json(motel);
    }

    async deletaMotel(request, response) {
        const { id } = request.params;
        const resultado = await this.service.delete(id);
        return response.json("Motel deletado com sucesso!")
    }
}