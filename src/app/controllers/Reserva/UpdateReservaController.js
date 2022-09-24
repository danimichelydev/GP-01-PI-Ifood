import UpdateReservaService from "../../services/Reserva/UpdateReservaService";

export default class UpdateReservaController {
    constructor() {
        this.service = new UpdateReservaService();
    }

    async updateReserva(req, res) {
        const { id } = req.params;
        const dadosReserva = req.body;
        const resultado = await this.service.update(id, dadosReserva);
        if (resultado.sucess == false) {
            return res.status(400).json(resultado);
        }
        return res.status(200).json(resultado);
    }
}
