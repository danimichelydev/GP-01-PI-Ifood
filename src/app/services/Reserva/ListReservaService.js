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
        const reserva = await ReservaModel.sequelize.query(
            "SELECT r.id as id_reserva, r.data_reserva, r.hora_reserva, r.status_reserva, q.id as id_quarto, q.nome as Quarto, m.nome as Motel,q.valor_quarto as Valor FROM reservas r INNER JOIN quartos q ON r.id_quarto = q.id INNER JOIN moteis m ON q.id_motel = m.id inner join usuarios u on r.id_usuario = u.id WHERE u.id = :id",
            {
            replacements: { id: id },
            type: ReservaModel.sequelize.QueryTypes.SELECT,
            }
        );
        reserva.forEach((reserva) => {
            let data= new Date(reserva.data_reserva);
            let dataFormatada = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
            reserva.data_reserva = dataFormatada;
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
            "SELECT r.id as id_reserva, r.data_reserva, r.hora_reserva, r.status_reserva, q.id as id_quarto, q.nome as Quarto, m.nome as Motel, u.nome as Usuario, u.cpf as CPF, u.email as Email FROM reservas r INNER JOIN quartos q ON r.id_quarto = q.id INNER JOIN moteis m ON q.id_motel = m.id inner join usuarios u on r.id_usuario = u.id WHERE m.id = :id",
            {
            replacements: { id: id },
            type: ReservaModel.sequelize.QueryTypes.SELECT,
            }
        );
        reserva.forEach((reserva) => {
            let data= new Date(reserva.data_reserva);
            let dataFormatada = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
            reserva.data_reserva = dataFormatada;
        });

        return reserva;    
        
        } catch (error) {
        return { erro: error.message };
        }
    }
    
}