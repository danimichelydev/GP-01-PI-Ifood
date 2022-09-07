import UpdateMotelService from "../../services/Motel/UpdateMotelService";

export default class UpdateMotelController {
    constructor() {
        this.service = new UpdateMotelService();
    }

    async atualizaMotel(request, response) {
        const { id } = request.params;
        const novasInfos = request.body;

        const motelAtualizado = await this.service.update(id, novasInfos)
        if (!motelAtualizado) {
            return response.status(400).json({ error: 'Motel não atualizado,verifique os dados' });
        }
        return response.status(200).json(motelAtualizado);
    }
}