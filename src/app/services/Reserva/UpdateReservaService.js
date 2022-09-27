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
            const verificaStatus = await ReservaModel.findOne({
                where: {
                    id,
                    status_reserva: 'Cancelada'||'Finalizada'
                }
            });
            if (verificaStatus) {
                return { sucess: false, message: 'Não é possível alterar uma reserva Cancelada ou Finalizada' };
            }

            await reserva.update(dadosReserva);

            return { sucess: true, message: 'Reserva atualizada com sucesso' };
        } catch (error) {
            return { erro: error.message };
        }
    }
}