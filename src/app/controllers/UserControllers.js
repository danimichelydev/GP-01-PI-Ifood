const UserService = require('../services/UserService')

const userController = {
    create: (request, response) => {
        const {
            nome,
            sobrenome,
            email,
            nascimento    
        } = request.body

        const user = UserService.createUsers(
            nome,
            sobrenome,
            email,
            nascimento
        );

        if (!user.sucess) {
            return response.status(400).json(user.message)
        }
        return response.status(200).json(user.message)
    },
    list: (request, response) => {
        const list = UserService.list()
        response.json(list)
    },
    update: (request, response) => {
        const { id } = request.params
        const {
            nome,
            sobrenome,
            email    
        } = request.body

        const user = UserService.update(id, nome, sobrenome, email)
       
        return response.status(200).json(user.message)
    },
    delete: (request, response) => {
        const { id } = request.params
        const user = UserService.delete(id)
        
        return response.status(200).json(user.message)
    }
}

module.exports = userController