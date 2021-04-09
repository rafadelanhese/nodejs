class Tabelas {
    init (conexao) {
        this.conexao = conexao
        this.criarAtendimentos()
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT_NULL, status varchar(20) NOT_NULL, observacoes text, PRIMARY KEY(id))'
        this.conexao.query(sql, () => {
            if(erro){
                console.log(erro)
            } else {
                console('Tabela criada com sucesso!!')
            }            
        });
    }
}

module.exports = new Tabelas