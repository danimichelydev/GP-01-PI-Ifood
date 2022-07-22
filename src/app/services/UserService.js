const UserModel = require("../models/UserModel");

let listUsers = []// criacao de ID sequencial, usar no list

const UserService = {
  createUsers: (nome, sobrenome, email) => {
    const newUser = new UserModel(
      (id = listUsers.length + 1),
      nome.toUpperCase(),
      sobrenome.toUpperCase(),
      email
    );

    listUsers.push(newUser);
    return {
      sucess: true,
      message: newUser,
    };
  },
  list: () => {
    return listUsers;
  },
  delete: (id) => {
    const index = listUsers.findIndex((user) => user.id == id);
    if (index === -1) {
      return { message: "Usuário não encontrado"};
    }
    listUsers.splice(index, 1);
    return { message: "Usuário deletado com sucesso"}
  }
}
module.exports = UserService;
