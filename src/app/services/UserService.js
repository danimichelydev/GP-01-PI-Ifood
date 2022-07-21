const UserModel = require('../models/UserModel')

let listUsers = [] // criacao de ID sequencial, usar no list

const UserService = {
    createUsers: (
        nome, sobrenome, email, nascimento
    ) => {
        const newUser = new UserModel(
            id = listUsers.length + 1,
            nome.toUpperCase(),
            sobrenome.toUpperCase(),
            email,
            nascimento
        );

        listUsers.push(newUser)
        return {
            sucess: true,
            message: newUser
        };
    }
}





module.exports = UserService