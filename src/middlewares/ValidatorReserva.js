import * as yup from 'yup';

export default async function validatorReserva(request, response, next) {
    const schema = yup.object().shape({
        id_usuario: yup.string().strict().required("Id do usuário é obrigatório"),
        id_quarto: yup.string().strict().required("Id do quarto é obrigatório"),
        data_reserva: yup.string().strict().required("Data da reserva é obrigatório"),
        hora_reserva: yup.string().strict().required("Hora da reserva é obrigatório"),
      })

    try {
        await schema.validate(request.body);
        next();
        
    } catch (err) {
        console.log(err)
        return response.status(400).json({
            error: err.errors
        });
    }
    

}