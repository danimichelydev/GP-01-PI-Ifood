import UsuarioRepository from "../models/UserModel.js";

async function findAll(req, res) {
  const usuarios = await UsuarioRepository.findAll();
  res.json(usuarios);
}

function findUsuario(req, res) {
  UsuarioRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addUsuario(req, res) {
  UsuarioRepository.create({
    nome: req.body.nome,
    email: req.body.email,
    cpf: req.body.cpf,
    dataNascimento: req.body.dataNascimento,
    senha: req.body.senha,
  }).then((result) => res.json(result));
}

async function updateUsuario(req, res) {
  await UsuarioRepository.update(
    {
      nome: req.body.nome,
      email: req.body.email,
      cpf: req.body.email,
      idade: req.body.email,
      senha: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  UsuarioRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteUsuario(req, res) {
  await UsuarioRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  UsuarioRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addUsuario, findUsuario, updateUsuario, deleteUsuario };
