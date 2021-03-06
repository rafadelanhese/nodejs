const conexao = require('../infraestrutura/conexao')
const uploadDeArquivo = require('../arquivos/uploadDeArquivo')

class PetsModel {
    adiciona(pet, res) {
        const query = 'INSERT INTO Pets SET ?'

        uploadDeArquivo(pet.imagem, pet.nome, novoCaminho => {
            const novoPet = { nome: pet.nome, imagem: novoCaminho }
            conexao.query(query, novoPet, erro => {
                if (erro) {
                    console.log(erro)
                    res.status(400).json(erro)
                } else {
                    res.status(200).json(novoPet)
                }
            })
        })
    }
}

module.exports = new PetsModel()