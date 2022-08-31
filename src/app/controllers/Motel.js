import MotelRepository from '../models/MotelModel.js'
import EnderecoRepository from '../models/EnderecoModel.js'

async function findAll(req, res) {
  const moteis = await MotelRepository.findAll();
  res.json(moteis);
}

function findMotel(req, res) {
  MotelRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addMotel(req, res) {
  let endereco = req.body.endereco;
  let motel = await MotelRepository.create({
    nome: req.body.nome,
    email: req.body.email,
    cnpj: req.body.cnpj,
    senha: req.body.senha,
  });
  endereco.idMotel = motel.id;
  await EnderecoRepository.create(endereco);
  res.json(motelDto(motel));
}

function motelDto(motel) {
  return {
    nome: motel.nome,
    email: motel.email
  }
}

async function updateMotel(req, res) {
  await MotelRepository.update(
    {
      nome: req.body.nome,
      email: req.body.email,
      cnpj: req.body.cnpj,
      senha: req.body.senha,
      rua: req.body.rua,
      numero: req.body.numero,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      cep: req.body.cep,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  MotelRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteMotel(req, res) {
  await MotelRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  MotelRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addMotel, findMotel, updateMotel, deleteMotel };
