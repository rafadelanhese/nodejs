const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'petshop',
    password: 'petshop',
    database: 'agenda-petshop'
})

module.exports = conexao