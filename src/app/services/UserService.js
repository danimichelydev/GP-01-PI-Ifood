const UserModel = require("../models/UserModel");

let listUsers = [];

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
};
module.exports = UserService;
