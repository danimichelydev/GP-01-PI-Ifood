const UserModel = require("../models/UserModel");

let listUsers = []// criacao de ID sequencial, usar no list

const UserService = {
  createUsers: (nome, sobrenome, email, nascimento) => {
    const newUser = new UserModel(
      listUsers.length + 1,
      nome.toUpperCase(),
      sobrenome.toUpperCase(),
      email,
      nascimento
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
  update: (id, nome, sobrenome, email, nascimento) => {
    const index = listUsers.findIndex((user) => user.id == id);
    if (index === -1) {
      return {
        sucess: false,
        message: "Usuário não encontrado"
      };
    }
    listUsers[index].nome = nome.toUpperCase();
    listUsers[index].sobrenome = sobrenome.toUpperCase();
    listUsers[index].email = email;
    listUsers[index].nascimento = nascimento
    return {
      sucess: true,
      message: "Usuário atualizado com sucesso"
    }
  },
  delete: (id) => {
    const index = listUsers.findIndex((user) => user.id == id);
    if (index === -1) {
      return {
        sucess: false,
        message: "Usuário não encontrado"
      };
    }
    listUsers.splice(index, 1);
    return {
      sucess: true,
      message: "Usuário deletado com sucesso"
    }
  }
}
module.exports = UserService;
