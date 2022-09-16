import * as yup from 'yup';

export default async function validatorMotel(request, response, next) {
    const schema = yup.object().shape({
        nome: yup.string().strict().required("Nome é obrigatório").min(3),
        cnpj: yup.string().strict().required("Cpf é obrigatório"),
        endereco:yup.object().shape({ 
            rua: yup.string().strict().required('Rua é obrigatório'),
            numero: yup.string().strict(),
            bairro: yup.string().required("Bairro é obrigatorio").strict(),
            cidade: yup.string().strict().required("Cidade é obrigatório"),
            cep: yup.string().strict().required("Cep é obrigatório")
        })
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

 
