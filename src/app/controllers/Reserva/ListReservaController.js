import ListReservaService from "../../services/Reserva/ListReservaService";

export default class ListReservaController {
    constructor() {
        this.service = new ListReservaService();
    }
    async list(req, res) {
        const reserva = await this.service.list();
        if (reserva.erro) {
            return res.status(400).json(reserva);
        }
        return res.json(reserva);
    }
    async listByUser(req, res) {
        const { id } = req.params;
        const reserva = await this.service.listByUser(id);
        if (reserva.erro) {
            return res.status(400).json(reserva);
        }
        return res.json(reserva);
    }
    async listByRoom(req, res) {
        const { id } = req.params;
        const reserva = await this.service.listByRoom(id);
        if (reserva.erro) {
            return res.status(400).json(reserva);
        }
        return res.json(reserva);
    }
    async listByMotel(req, res) {
        const { id } = req.params;
        const reserva = await this.service.listByMotel(id);
        if (reserva.erro) {
            return res.status(400).json(reserva);
        }
        return res.json(reserva);
    } 
}
