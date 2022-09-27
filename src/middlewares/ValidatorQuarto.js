import * as yup from 'yup';

export default async function validatorQuarto(request, response, next) {
    const schema = yup.object().shape({
        nome: yup.string().strict().required("Nome do quarto é obrigatório"),
        valor_quarto: yup.number().strict().required("Valor do quarto é obrigatório"),
        acessorios_quarto: yup.string().strict().required("Acessórios do quarto é obrigatório"),
        status_quarto: yup.string().strict().required("Status do quarto é obrigatório"),
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