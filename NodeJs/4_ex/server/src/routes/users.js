module.exports = app => {
    app.get('/users', (req, res) => { res.send("funca") })
    app.post('/user', (req, res) => { res.send("funca") });
    app.delete('/user/:id', (req, res) => { })
    app.patch('/userName/:id', (req, res) => { })
    app.patch('email/:id', (req, res) => { })
}