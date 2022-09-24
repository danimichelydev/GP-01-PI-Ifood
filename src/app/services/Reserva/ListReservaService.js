import ReservaModel from "../../models/ReservaModel";

export default class ListReservaService {
    async list() {
        try {
        const reserva = await ReservaModel.findAll();
        return reserva;
        } catch (error) {
        return { erro: error.message };
        }
    }
    async listByUser(id) {
        try {
        const reserva = await ReservaModel.findAll({
            where: {
            id_usuario: id,
            },
        });
        return reserva;
        } catch (error) {
        return { erro: error.message };
        }
    }
    async listByRoom(id) {
        try {
        const reserva = await ReservaModel.findAll({
            where: {
            id_quarto: id,
            },
        });
        return reserva;
        } catch (error) {
        return { erro: error.message };
        }
    }
    async listByMotel(id) {
        try {
        const reserva = await ReservaModel.sequelize.query(
            "SELECT * FROM reservas r INNER JOIN quartos q ON r.id_quarto = q.id INNER JOIN moteis m ON q.id_motel = m.id WHERE m.id = :id",
            {
            replacements: { id: id },
            type: ReservaModel.sequelize.QueryTypes.SELECT,
            }
        );
            return reserva;
        } catch (error) {
        return { erro: error.message };
        }
    }
    
}