const moment = require('moment')

const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, res) {    
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        const dataValida = moment(data).isSameOrAfter(dataCriacao);
        const clienteValido = atendimento.cliente.lenth >= 5;

        const validacoes = [
            {
                nome: 'data',
                valido: dataValida,
                mensagem: 'Data deve ser igual ou maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteValido,
                mensagem: 'Cliente deve ter no mínimo cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length;

        if (existemErros) {
            res.status(400).json(erros);
        } else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data };
            const sql = 'INSERT INTO Atendimento SET ?';
            conexao.query(sql, atendimentoDatado, (erro, resposta) => {
                if (erro) {
                    res.status(400).json(erro);
                } else {
                    res.status(201).json(resposta);
                }
            })
        }
    }

    lista(res){
        const sql = 'SELECT * FROM Atendimento';

        conexao.query(sql, (erros, resultado) =>{
            if(erros){
                res.status(400).json(erros);
            } else {
                res.status(200).json(resultado);
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimento WHERE id=${id}`;        
        conexao.query(sql, (erros, resultado) => {
            const atendimento = resultado[0];
            if(erros){
                res.status(400).json(erros);
            } else {
                res.status(200).json(atendimento);
            }
        })
    }
}

module.exports = new Atendimento