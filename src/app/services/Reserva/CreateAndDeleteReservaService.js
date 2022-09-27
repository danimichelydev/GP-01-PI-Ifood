import ReservaModel from '../../models/ReservaModel';

export default class CreateAndDeleteReservaService {
    async create(dadosReserva) {
        try {
            const QuartoExiste = await ReservaModel.findOne({
                where: { id_quarto: dadosReserva.id_quarto },
            });
            const UsuarioExiste = await ReservaModel.findOne({
                where: { id_usuario: dadosReserva.id_usuario },
            });
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
            function verificaHoras(hora) {
                let horaMinuto = hora.split(':');
                if (horaMinuto[0] >= 0 && horaMinuto[0] <= 23) {
                    return true;
                } else {
                    return false;
                }
            }
            function VerificaDataAtual(data,hora){
                let dataAtual = new Date();
                let dataReserva = new Date(data);
                let horaAtual = dataAtual.getHours();
                let horaReserva = hora.split(':');
                let dataAtualFormatada = dataAtual.getFullYear() + '-' + (dataAtual.getMonth() + 1) + '-' + dataAtual.getDate();
                let dataReservaFormatada = dataReserva.getFullYear() + '-' + (dataReserva.getMonth() + 1) + '-' + dataReserva.getDate();

                if(dataReservaFormatada < dataAtualFormatada){
                    return false;
                }else if(dataReservaFormatada == dataAtualFormatada){
                    if(Number(horaReserva[0]) < Number(horaAtual)){
                        return false;
                    }else{
                        return true;
                    }
                }else{
                    return true;
                }
            }
            if (VerificaDataAtual(dadosReserva.data_reserva,dadosReserva.hora_reserva) == false) {
                return { erro: 'Não é possível reservar um quarto em uma data/hora anterior a atual' };
            }
            if (verificaHoras(dadosReserva.hora_reserva) == false) {
                return { erro: 'Hora inválida' };
            }
            if (!QuartoExiste || !UsuarioExiste) {
                return { erro: 'Quarto ou Usuario não existe' };
            }
            if (verificaMinutos(dadosReserva.hora_reserva) == false) {
                return { erro: 'Não é possível reservar com minutos diferentes de 00' };
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