import CreateAndDeleteMotelService from "../../services/Motel/CreateAndDeleteMotelService";

export default class CreateAndDeleteMotelController {
    constructor() {
        this.service = new CreateAndDeleteMotelService();
    }

    async addMotel(request, response) {
        let endereco = request.body.endereco;
        let motel = await this.service.create(request.body);

        if (motel.erro) {
            return response.status(400).json(motel);
        }
        return response.status(201).json(motel);
    }

    async deletaMotel(request, response) {
        const { id } = request.params;
        const resultado = await this.service.delete(id);
        if (resultado.sucess == false) {
            return response.status(400).json(resultado);
        }
        return response.status(200).json(resultado);
    }
};