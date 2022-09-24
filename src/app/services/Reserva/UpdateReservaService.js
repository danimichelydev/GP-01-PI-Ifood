import ReservaModel from "../../models/ReservaModel";

export default class UpdateReservaService {
    async update(id, dadosReserva) {
        try {
            const reserva = await ReservaModel.findOne({
                where: {
                    id,
                }
            });

            if (!reserva) {
                return { sucess: false, message: 'Reserva não encontrada' };
            }

            await reserva.update(dadosReserva);

            return { sucess: true, message: 'Reserva atualizada com sucesso' };
        } catch (error) {
            return { erro: error.message };
        }
    }
}