import * as yup from 'yup';

export default async function validatorUsers(request, response, next) {
    const schema = yup.object().shape({
        nome: yup.string().strict().required("Nome é obrigatório").min(3),
        email: yup.string().email().required("Email é obrigatório"),
        cpf: yup.string().strict().required("Cpf é obrigatório"),
        dataNascimento: yup.string().strict().min(10),
        senha: yup.string().strict().min(6)
    })

    await schema.validate(request.body).catch((err) => {
        console.log(err)
        return response.status(400).json({
      error: err.errors
    });
  });
  next();
}
