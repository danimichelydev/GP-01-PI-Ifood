function UserModel(id, nome, sobrenome, email, nascimento) {
    this.id = id,
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.email = email,
    this.nascimento = aniversario(nascimento) // quando for testar no Insomnia passar no formato data US
}

function aniversario(nascimento) {

    let data = new Date(nascimento)
    let nascimentoFormatado = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + (data.getFullYear());
    return nascimentoFormatado
}

module.exports = UserModel