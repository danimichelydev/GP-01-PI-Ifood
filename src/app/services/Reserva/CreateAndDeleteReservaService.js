import ReservaModel from '../../models/ReservaModel';

export default class CreateAndDeleteReservaService {
    async create(dadosReserva) {
        try {
            const reservaExiste = await ReservaModel.findOne({
                where: {
                    id_quarto: dadosReserva.id_quarto,
                    data_reserva: dadosReserva.data_reserva,
                    hora_reserva: dadosReserva.hora_reserva,
                }
            });
            const verificaStatus = await ReservaModel.findOne({
                where: {
                    id_quarto: dadosReserva.id_quarto,
                    data_reserva: dadosReserva.data_reserva,
                    hora_reserva: dadosReserva.hora_reserva,
                    status_reserva: 'Reservado'
                }
            });
            function verificaMinutos(hora) {
                let horaMinuto = hora.split(':');
                if (horaMinuto[1] == '00') {
                    return true;
                } else {
                    return false;
                }
            }
            if (verificaMinutos(dadosReserva.hora_reserva) == false) {
                return { sucess: false, message: 'Não é possível reservar com minutos diferentes de 00' };
            }
            if (reservaExiste && verificaStatus) {
                return { erro: 'Quarto já possui reserva nesse horário!' };
            }
            const reserva = await ReservaModel.create(dadosReserva);
            return reserva;
        } catch (error) {
            return { erro: error.message };
        }
    }

    async delete(id) {
        try {
            const reserva = await ReservaModel.findOne({
                where: {
                    id,
                }
            });

            if (!reserva) {
                return { sucess: false, message: 'Reserva não encontrada' };
            }

            await reserva.destroy();

            return { sucess: true, message: 'Reserva deletada com sucesso' };
        } catch (error) {
            return { erro: error.message };
        }
    }
  
}