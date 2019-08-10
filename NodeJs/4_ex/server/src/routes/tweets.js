module.exports = app => {
    app.delete('/tweet/:id', (req, res) => { })
    app.post('/tweet', (req, res) => { })
    app.get('/tweets', (req, res) => console.log("holi")/*res.send(tweets)*/)
    app.get('/tweet/:id', (req, res) => { })
    app.get('/tweetsSorted', (req, res) => { })
}