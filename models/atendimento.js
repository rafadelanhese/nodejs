const moment = require('moment')

const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adiciona(atendimento){        
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')        
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimento SET ?'        
        conexao.query(sql, atendimentoDatado, (erro, resposta) => {
            if(erro){
                console.log(erro)
            } else {
                console.log(resposta)
            }
        })
    }
}

module.exports = new Atendimento