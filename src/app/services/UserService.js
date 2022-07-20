const UserModel = require('../models/UserModel')

let listUsers = new Array(new UserModel) // criacao de ID sequencial, usar no list

const UserService = {
    createUsers: (
        nome, sobrenome, email
    ) => {
        const newUser = new UserModel(
            id = listUsers.length + 1,
            nome.toUpperCase(),
            sobrenome.toUpperCase(),
            email
        );

        listUsers.push(newUser)
        return {
            sucess: true,
            message: newUser
        };
    }
}





module.exports = UserService