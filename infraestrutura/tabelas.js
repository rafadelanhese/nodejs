class Tabelas {
    init (conexao) {
        this.conexao = conexao
        this.criarAtendimentos()
        this.criarPets()
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimento (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log('Erro ao criar tabela' + erro)
            } else {
                console.log('Tabela criada com sucesso!!')
            }            
        });
    }

    criarPets(){
        const sql = 'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(200), PRIMARY KEY (id))'
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log('Erro ao criar tabela Pets: ' + erro)
            } else {
                console.log('Tabela Pets criado com sucesso')
            }
        })
    }
}

module.exports = new Tabelas