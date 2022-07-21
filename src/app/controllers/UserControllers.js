const UserService = require('../services/UserService')

const userController = {
    create: (request, response) => {
        const {
            nome,
            sobrenome,
            email    
        } = request.body

        const user = UserService.createUsers(
            nome,
            sobrenome,
            email
        );

        if (!user.sucess) {
            return response.status(400).json(user.message)
        }
        return response.status(200).json(user.message)
    },
    list: (request, response) => {
        const list = UserService.list()
        response.json(list)
    }
}

module.exports = userController