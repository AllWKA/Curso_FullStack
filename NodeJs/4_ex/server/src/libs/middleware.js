const express = require('express')
var cors = require('cors');
var moment = require('moment');




module.exports = app => {
    app.use(express.json());
    app.use(cors());

    //establecer el puerto que usara el servidor
    app.set('port', 3000);

    console.log("port setted in:", app.get('port'));

}