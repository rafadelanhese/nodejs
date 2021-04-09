module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Rota atendimentos, teste'))
    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Rota POST')
    })
}