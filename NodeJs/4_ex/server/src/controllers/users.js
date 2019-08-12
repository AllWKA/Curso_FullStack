function postUser(req, res) {
    if (req.body.userName && req.body.name && req.body.email) {
        var id = newId(users);
        var newUser = {
            userName: req.body.userName,
            name: req.body.name,
            email: req.body.email,
            tweets: [],
        }
        users[id] = newUser;
        res.send(users)
    } else {
        res.send("bad params")
    }
}
function deleteUser(req, res) {
    delete users[req.params.id]
    res.send(users)
}
function pathUserName(req, res) {
    users[req.params.id].userName = req.body.userName;
    res.send(users[req.params.id])
}
function patchEmail(req, res) {
    users[req.params.id].email = req.body.email;
    res.send(users[req.params.id])
}