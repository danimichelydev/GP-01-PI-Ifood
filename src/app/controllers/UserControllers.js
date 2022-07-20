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
    }
}

module.exports = userController