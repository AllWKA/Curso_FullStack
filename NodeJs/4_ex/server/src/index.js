const express = require('express')
var consign = require('consign')

const app = express()



consign({
    cwd: __dirname
})
    .include("./libs/config.js")
    // .then('db.js')
    .then('./routes')
    .then('./libs/middleware.js')
    .then('./controllers')
    .into(app);

app.listen(3000)