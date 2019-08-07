const express = require('express')
const app = express()

var todo = [];

app.use(express.json());

app.get('/list', function (req, res) {
    res.send(todo)
})
app.post('/item', function (req, res) {
    console.log(req.body);
    var newItem = {
        id: todo.length,
        name: req.body.name,
        status: false
    }
    todo.push(newItem)
    res.send('Done:' + JSON.stringify(todo[newItem.id]));
})
app.put('/:id', function (req, res) {
    console.log(req.params);
    console.log(req.body);
    if (todo.length - 1 >= req.params.id) {
        todo[req.params.id].name = req.body.name;
        todo[req.params.id].status = req.body.status;
        return res.send(todo[req.params.id]);
    } else {
        return res.send("no existe wey")
    }
})
app.delete('/:id', function (req, res) {
    res.send('Hello World')
})
app.listen(3000)