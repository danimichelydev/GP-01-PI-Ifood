import CreateAndDeleteReservaService from "../../services/Reserva/CreateAndDeleteReservaService";

export default class CreateAndDeleteReservaController {
    constructor() {
        this.service = new CreateAndDeleteReservaService();
    }
    
    async addReserva(req, res) {
        let dadosReserva = req.body;
        let reserva = await this.service.create(dadosReserva)
        if (reserva.erro) {
            return res.status(400).json(reserva);
        }
        return res.status(201).json(reserva);
    }
    
    async deletaReserva(req, res) {
        const { id } = req.params;
        const resultado = await this.service.delete(id);
        if (resultado.sucess == false) {
        return res.status(400).json(resultado);
        }
        return res.status(200).json(resultado);
    }
    
};

