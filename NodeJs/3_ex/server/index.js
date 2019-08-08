const express = require('express')
const app = express()
var cors = require('cors');

var todo = {};
// var ids = [];

app.use(express.json());
app.use(cors());

app.get('/list', function (req, res) {
    console.log("get");
    res.send(todo)
})

app.post('/item', function (req, res) {
    console.log("post:" + req.body.name);
    var id = newId();
    var newItem = {
        name: req.body.name,
        status: false
    }
    todo[id] = newItem
    res.send('Done:\n' + JSON.stringify(todo[id]));
})

app.put('/:id', function (req, res) {
    if (Object.keys(todo).length - 1 >= req.params.id) {
        todo[req.params.id].name = req.body.name;
        todo[req.params.id].status = req.body.status;
        return res.send(todo[req.params.id]);
    } else {
        return res.send("no existe wey")
    }
})
app.put('/done/:id', function (req, res) {
    if (Object.keys(todo).length - 1 >= req.params.id) {
        todo[req.params.id].status = true;
        return res.send(todo[req.params.id]);
    } else {
        return res.send("no existe wey")
    }
})
app.put('/pending/:id', function (req, res) {
    if (Object.keys(todo).length - 1 >= req.params.id) {
        todo[req.params.id].status = false;
        return res.send(todo[req.params.id]);
    } else {
        return res.send("no existe wey")
    }
})
app.delete('/:id', function (req, res) {
    delete todo[req.params.id]
    newId()
    res.send('Hello World')
})

function newId() {
    var keys = []
    var i = 0;
    for (var k in todo) {
        keys[i] = k
        i++
    };
    if (keys[0] != "0") {
        return 0;
    } else if (keys[1] != "1") {
        return 1;
    } else {
        for (let j = 0; j < keys.length - 1; j++) {
            if (keys[j + 1] - keys[j] != 1) {
                return Number.parseInt(keys[j]) + 1;
            }
        }
        return Object.keys(todo).length;
    }
}
app.listen(3000)