//const yup = require('yup')

import yup from 'yup';

function validatorUsers(request, response, next) {
    const schema = yup.object().shape({
        nome: yup.string().strict().required().min(3),
        sobrenome: yup.string().strict().required().min(3),
        email: yup.string().email(),
        nascimento: yup.string().strict().min(10)
    })
    if(!schema.isValidSync(request.body)) {
        return response.status(400).json({ error: "Verifique os campos obrigatórios"})
    }

    next()
}

export default validatorUsers;
//module.exports = validatorUsers;